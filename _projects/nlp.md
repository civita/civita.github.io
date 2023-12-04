---
layout: distill
title: Learning from Adversarial Examples for SQuAD
description: An approach addressing dataset artifacts by focusing on adversarial examples
importance: 1
category: school
date: 2022-12-01
img: assets/img/project_nlp-preview.png

authors:
  - name: Michael Chang
    affiliations:
      name: UT Austin

bibliography: project_nlp.bib

toc:
  - name: Abstract
  - name: Introduction
  - name: Background and Motivation
    subsections:
      - name: Pre-training Methods
      - name: Adversarial Examples
  - name: Proposed Ideas
    subsections:
      - name: Learning from Adversarial Examples
      - name: Slightly Modified Adversarial Examples
  - name: Results
  - name: Conclusion
---

## Abstract

This paper proposes ideas dealing with dataset artifacts from Stanford Question Answering Dataset (SQuAD). With adversarial examples, results showed that many state-of-the-art NLP models had significantly F1 score drops. Methods like retraining on the challenging set seem possible; however, it has over-fitting issues. Here we focus on the characteristics of adversarial examples and provide an intuitive idea to reconstruct the paragraphs for reading comprehension based question answering. Evaluations are conducted based on several trained models and datasets, demonstrating the F1 gain from $2.17\%$ to $9.36\%$ based on different challenging datasets.

## Introduction

We explore one of the NLP tasks, reading comprehension based question answering (QA), and focus on Stanford Question Answering Dataset (SQuAD) <d-cite key="rajpurkar2016squad"/>, which includes paragraphs and corresponding question-answer pairs taken from Wikipedia. Although pre-training methods are able to achieve relative high F1 on this dataset, it is questioning that whether these models really *understand* the paragraphs or not. Based on this motivation, we then investigate on dataset artifacts which can be conducted by either changing the training data or the model. In this paper, we use adversarial examples to demonstrate dataset artifacts and propose ideas based on both retraining on challenging sets and dataset modification to fix it.

## Background and Motivation

### Pre-training Methods

Recently, pre-trained text encoders have shown great improvement for NLP tasks. For example, masked language modeling (MLM) pre-training methods such as BERT <d-cite key="devlin-etal-2019-bert"/> and models based on it replaces some tokens in texts and reconstructs them by training. However, these MLM-based models have high computational costs and low sample efficiency because only 15% of tokens are learned per example. Alternatively, ELECTRA <d-cite key="clark2020electra"/> proposed a new sample-efficient pre-training task by replacing some tokens with samples from a proposal distribution. With the same computational costs (pre-train FLOPs), ELECTRA-Small (compact version of ELECTRA) outperforms a small BERT model by 5 points on GLUE benchmark <d-cite key="wang2019glue"/>. Throughout this paper, we will use ELECTRA-Small as the base model and fine-tune on it.

### Adversarial Examples

Although pre-trained models achieve high F1 performance on NLP datasets from either natural language inference (NLI) or question answering (QA), the extent to which these systems truly comprehend human language is still unclear. By learning spurious correlations in datasets, known as dataset artifacts, the models are supposed to fail where these artifacts no longer exist. Examples like evaluating the model via contrast sets <d-cite key="gardner2020evaluating"/> or adversarial examples <d-cite key="glockner2018breaking"/><d-cite key="wallace2021universal"/> showed significant F1 drops. These results imply that we should re-examine the datasets and develop new models which understand language more precisely.

<a name="fig-1"></a>
{% include figure.html path="assets/img/project_nlp-1.png" width="400" class="img-fluid z-depth-1" %}
<div class="caption">
    Figure 1: An example from SQuAD dataset with an additional adversarial distracting sentence.
</div>

In this paper, one of the famous question answering datasets, Stanford Question Answering Dataset, or SQuAD <d-cite key="rajpurkar2016squad"/>, is chosen to be trained and evaluated as the baseline with the pre-trained ELECTRA-Small model. Then adversarial examples, also known as challenging examples, based on SQuAD are used to do further evaluation <d-cite key="jia2017adversarial"/>. This set of examples adds one distracting sentence with unrelated keywords at the end of every paragraph, as shown in Figure [1](#fig-1). Distracting sentences are generated automatically with assuming that they do not contradict correct answers, and then grammatical errors are corrected by humans.

<a name="tab-1"></a>

| Model \ Dataset              | SQuAD  | AddSent |
|------------------------------|--------|---------|
| ELECTRA-Small                | 85.04% | 57.99%  |

<div class="caption">
    Table 1: F1 results without and with adversarial examples. Here <i>AddSent</i> represents dataset with additional distracting sentences.
</div>

Evaluation results show that F1 drops from 85.04% to 57.99% after adding adversarial sentences (Table [1](#tab-1)). Reasons for model failures, proposed by the author of adversarial examples, are that models cannot learn very well in long-distance relationships between parts of the paragraph, so they fail to locate pieces of evidence that support correct answers. In addition, models have worse performance as the length of questions increases. This is due to the way they generated distracting sentences: sentences are generated based on the questions with the replacement of at least one word. If it is a long question, the distracting sentence tends to have many common words with the question.

In the next section, we will focus on this dataset and propose an idea to improve the above-mentioned issue. Then several evaluations are performed to support the proposed idea.

## Proposed Ideas

### Learning from Adversarial Examples

There are various methods to deal with dataset artifacts, including training on the adversarial data, which seems to be an intuitive way in our scenario. However, in the original paper proposed adversarial examples, authors <d-cite key="jia2017adversarial"/> pointed out that after training on the adversarial data, the model simply learned to ignore the last sentence in every paragraph given that distracting sentences are always appended to the end of the paragraph. Experiments conducted by others also supported this observation <d-cite key="liu2019inoculation"/>, that is, the model is over-fitted to the adversary examples.

### Slightly Modified Adversarial Examples

To find out a way to train the model with augmented data without over-fitting, we slightly modified the adversarial examples. As the authors stated that "the decision to always append `s` to the end of `p` is somewhat arbitrary" <d-cite key="jia2017adversarial"/>, we came up with an idea to randomize the locations of inserted sentences, in order to make the dataset more generalized. To be more precise, the distracting sentences are inserted to index $(0, n]$ given that there are $n$ sentences in the paragraph (the index starts from zero).

<a name="fig-2"></a>
{% include figure.html path="assets/img/project_nlp-2.png" max-width="400" class="img-fluid z-depth-1" %}
<div class="caption">
    Figure 2: An example of the proposed idea that randomizes the locations of inserted sentences.
</div>

Note that here sentences are never inserted at the beginning of the paragraph due to the fact that the first sentence is expected somehow highly related to the topic. An example of the generated paragraph is given in Figure [2](#fig-2). Note that because distracting sentences no longer always locate at the end of contexts, the trained model based on this modified dataset will not just discard the last sentence.

However, there exists one exception: if there is only one sentence, the inserted one will still be the end of contexts, given the constraint that the inserted one cannot locate in the beginning.

## Results

Based on the proposed idea in previous subsection, we trained the ELECTRA-Small model on the union of modified examples and original SQuAD training data, named *SQuAD+AddSentRnd* in the following discussion. As a control, we trained another ELECTRA-Small model only on the SQuAD alone, named *SQuAD-alone*.

For training models, we use HuggingFace's `transformers` Python library <d-cite key="wolf2020huggingfaces"/> on NVIDIA GeForce RTX 3090 with the parameters listed in Table [2](#tab-2). The training / validation sets of the modified dataset are split manually, with a size of $3,236$ and $324$ pairs of QA, respectively.

<a name="tab-2"></a>

| Parameter               | Value   |
|-------------------------|---------|
| Train epochs            | 3.0     |
| Batch size              | 64      |
| Maximum sequence length | 128     |
| Number of processes     | 2       |

<div class="caption">
    Table 2: Training parameters. Unlisted parameters are set to Huggingface default.
</div>

<a name="tab-3"></a>

| Model trained on \ Dataset    | SQuAD  | AddSent | Randomized AddSent |
|------------------------------|--------|---------|---------------------|
| *SQuAD-alone*                  | 85.04% | 57.99%  | 53.04%              |
| *SQuAD+AddSentRnd*             | 85.07% | 83.88%  | **62.40%**              |

<div class="caption">
    Table 3: F1 results on SQuAD validation set, original <i>AddSent</i> validation set, and randomized (proposed) <i>AddSent</i> validation set.
</div>

We first compared the results evaluated on the original SQuAD validation set; the proposed model has $85.07\%$ F1, which is very close to the control ($85.04\%$). This is expected since that the original SQuAD validation set is not an adversarial one, so our model should not perform either better or worse.

Next, we evaluated both models on three validation sets, listed in Table [2](#tab-3). In *AddSent* validation set, the model trained on the proposed dataset has a better F1 result as expected because there are conditions that the inserted sentence is at the end of the paragraph (as discussed in previous subsection).

Interestingly, our proposed model also has a better F1 performance on the modified validation set (referring to *Randomized AddSent* in Table [2](#tab-3)). This indicates that our trained model does not just discard the last sentence.

Furthermore, we tried to evaluate our model on another set of adversarial examples, *adversarialQA*, which applied a different approach to generating sentences <d-cite key="bartolo2020beat"/>. The F1 is $28.06\%$ on our proposed model, compared to $25.89\%$ on *SQuAD-alone*. We also trained the third model, which is based on the ELECTRA-Small model as well, with the union of the original *AddSent* and SQuAD training data, named *SQuAD+AddSent*. The overall results are listed in Table [4](#tab-4). Overall, our proposed model gets slightly better results among the three models.

<a name="tab-4"></a>

| Model                | F1     |
|----------------------|--------|
| SQuAD-alone          | 25.89% |
| SQuAD+AddSentRnd     | **28.06%** |
| SQuAD+AddSent        | 25.12% |

<div class="caption">
    Table 4: F1 results on another adversarial examples, <i>adversarialQA</i> <d-cite key="bartolo2020beat"/>. Note that model <i>SQuAD+AddSent</i> trained on the <i>AddSent</i> dataset proposed by <d-cite key="jia2017adversarial"/>.
</div>

## Conclusion

It shows that our proposed model has around 9.36% F1 improvement on the modified adversarial dataset, and around 2.17% on `adversarialQA` dataset. Note that our idea is rather intuitive and there is not much work on fine-tuning models. Future work includes comprehensive analysis on more adversarial examples <d-cite key="wang2018robust"/> and other approaches like Dataset cartography <d-cite key="swayamdipta2020dataset"/> and Contrastive training <d-cite key="dua2021learning"/>. Besides, we would like to find a more generalized approach that can also be applied to natural language inference problems.
