---
title: "Revisiting the Past: A comparative study for semantic segmentation of historical images of Adelaide Island using U-nets"
authors: "Felix Dahle, Bert Wouters, Roderik Lindenbergh"
venue: "ISPRS Open Journal of Photogrammetry and Remote Sensing"
year: 2024
description: "Building on previous work, we extend the semantic segmentation of historical photographs of Antarctica using U-nets. We compare multiple hyper-parameters and augmentation methods to identify the optimal settings for segmentation of Adelaide Island."
abstract: |
  The TriMetrogon Aerial (TMA) archive is an archive of historical images of Antarctica taken by the US Navy between 1940 and 2000 with analogue cameras. The analysis of such historic data can give a view of Antarctica’s glaciers predating modern satellite imagery and provide unique insights into the long-term impact of changing climate conditions with essential validation data for climate modelling. However, the lack of semantic information for these images presents a challenge for large-scale computer-driven analysis.

  Such information can be added to the data using semantic segmentation, but traditional algorithms fail on these scanned historical grayscale images, due to varying image quality, lack of colour information and artefacts in the images. To address this, we present a deep-learning-based U-net workflow. Our approach includes creating training data by pre-processing and labelling the raw images. Furthermore, different versions of the U-net are trained to optimize its hyper-parameters and augmentation methods. With the optimal hyper-parameters and augmentation methods, a final model has been trained for a use-case to segment 118 images covering Adelaide Island.

  We tested our approach by segmenting challenging historical images using a U-net model with just 80 training images, achieving an accuracy of 73% for 20 validation images. While no test data is available for our use case, a visual examination of the segmented images shows that our method performs effectively. The comparison of the hyper-parameters and augmentation methods provides directions for training other U-net-based models so that the presented workflow can be used to segment other archives with historical imagery. Additionally, the labelled training data and the segmented images of the test are publicly available at https://github.com/fdahle/antarctic_segmentation.
img: "/img/publications/revisit_past.png"
doi: "https://doi.org/10.1016/j.ophoto.2023.100056"
pdf: "https://www.sciencedirect.com/science/article/pii/S2667393223000273/pdfft?md5=d102ce83a2ff8228dd333428f7d3bf8e&pid=1-s2.0-S2667393223000273-main.pdf"
code: "https://github.com/fdahle/antarctic_segmentation"
openAccess: true
featured: true
bibtex: |
  @article{DAHLE2024100056,
    title   = {Revisiting the Past: A comparative study for semantic segmentation of historical images of Adelaide Island using U-nets},
    journal = {ISPRS Open Journal of Photogrammetry and Remote Sensing},
    volume  = {11},
    pages   = {100056},
    year    = {2024},
    issn    = {2667-3932},
    doi     = {10.1016/j.ophoto.2023.100056},
    url     = {https://www.sciencedirect.com/science/article/pii/S2667393223000273},
    author  = {Felix Dahle and Roderik Lindenbergh and Bert Wouters}
  }
---
