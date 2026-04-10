---
title: "Semantic segmentation of historical photographs of the Antarctic Peninsula"
authors: "Felix Dahle, Julian Tanke, Bert Wouters, Roderik Lindenbergh"
venue: "XXIVth ISPRS Congress 2022 (Nice, France)"
year: 2022
description: "Semantic segmentation is applied to historical photographs of Antarctica using a U-net based machine learning approach. Results show the method handles very challenging images even when trained with only a small number of training samples, capturing the general semantic meaning of a scene."
abstract: |
  A huge archive of historical images of the Antarctica taken by the US Navy between 1940 and 2000 is publicly available. These images have not yet been used for large-scale computer-driven analysis as they were captured with analog cameras. They were only later digitized and contain no semantic information. Most modern deep-learning based semantic segmentation algorithms are trained on modern images and fail on these scanned historical images, due to varying image quality, lack of color information, and most crucially, due to artifacts in both imaging as well as scanning (e.g. Newton’s rings). The analysis of such historic data can give a view on Antarctica’s glaciers predating modern satellite imagery and provide a unique insight into the long-term impact of changing climate conditions with essential validation data for climate modelling. An important first step for analysis of such data is the extraction and localization of semantic information, e.g. where in the image is water, rocks, or snow. In this work we present the first deep-learning based method to perform semantic segmentation on historical imagery archives of the Antarctic Peninsula. Our results show that our method can handle very challenging images even after being trained with only a low number of training data and catch the general semantic meaning of a scene. For eight test images we achieve an accuracy of 74%, where the majority of errors can be explained by the classification of ice as snow.
img: "/img/publications/semantic_segmentation.png"
doi: "https://doi.org/10.5194/isprs-annals-V-2-2022-237-2022"
pdf: "https://www.isprs-ann-photogramm-remote-sens-spatial-inf-sci.net/V-2-2022/237/2022/isprs-annals-V-2-2022-237-2022.pdf"
code: "https://github.com/fdahle/antarctic_segmentation"
openAccess: true
featured: false
bibtex: |
  @article{isprs-annals-V-2-2022-237-2022,
    author  = {Dahle, F. and Tanke, J. and Wouters, B. and Lindenbergh, R.},
    title   = {Semantic Segmentation of Historical Photographs of the Antarctic Peninsula},
    journal = {ISPRS Annals of the Photogrammetry, Remote Sensing and Spatial Information Sciences},
    volume  = {V-2-2022},
    year    = {2022},
    pages   = {237--244},
    url     = {https://www.isprs-ann-photogramm-remote-sens-spatial-inf-sci.net/V-2-2022/237/2022/},
    doi     = {10.5194/isprs-annals-V-2-2022-237-2022}
  }
---
