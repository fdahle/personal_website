---
title: "From Film to Data: Automating Meta-Feature Extraction in Historical Aerial Imagery"
authors: "Felix Dahle, Yushan Liu, Bert Wouters, Roderik Lindenbergh"
venue: "PFG - Journal of Photogrammetry, Remote Sensing and Geoinformation Science"
year: 2025
description: "This paper presents an open-source, automated workflow that uses computer vision and machine learning to extract essential metadata—such as fiducial marks and camera parameters—from historical aerial imagery. Evaluated on over 7,000 images of the Antarctic Peninsula, the method effectively overcomes severe scanning artifacts and missing data to enable accurate 3D reconstructions."
abstract: |
  Historical aerial imagery provides valuable data from regions and periods with limited geospatial information. A common
  method to utilize this data is through the generation of ortho-photos and 3D models using Structure-from-Motion (SfM)
  techniques. However, many of these images were scanned decades after their acquisition and require geometric calibration,
  along with internal and external camera parameter estimation, for accurate reconstruction. Manual identification of key
  features, such as fiducial marks and text annotations, is labour-intensive, while existing automated methods struggle with
  poor-quality datasets.

  This paper presents an automated workflow that combines computer vision and machine learning techniques to detect and
  extract these key features from historical aerial images. To address challenges related to image quality, we also introduce
  estimation protocols that compensate for missing or unreliable detections by leveraging redundancy across multiple flight
  paths. The methodology was evaluated on the TMA (Trimetrogon Aerial) archive, a collection of historical images from the
  Antarctic Peninsula. Our test dataset comprised over 7000 images from 20 different flight paths. The workflow demonstrated
  high success rates in detecting and extracting fiducial marks, image subsets, and textual annotations. Approximately 70%
  of the images provided usable focal length data, while fiducial mark detection exhibited high accuracy except in cases
  of severe scanning artifacts. Altitude data extraction proved to be the most challenging, with successful results in only
  15% of images due to degraded altimeter readings. Despite these limitations, the automated workflow effectively estimated
  missing parameters, ensuring robust image reconstruction across flight paths. The code for this workflow is open-source
  and publicly available on GitHub at https://github.com/fdahle/hist_meta_extraction.
img: "/img/publications/film_to_data.png"
doi: "https://doi.org/10.1007/s41064-025-00357-8"
pdf: "https://link.springer.com/content/pdf/10.1007/s41064-025-00357-8.pdf"
code: "https://github.com/fdahle/hist_meta_extraction"
openAccess: true
featured: false
tags: [historical-imagery, computer-vision, photogrammetry, metadata]
bibtex: |
  @article{dahle_film_to_data,
    title = "From Film to Data: Automating Meta-Feature Extraction in Historical Aerial Imagery",
    keywords = "Altimeter, Computer vision, Fiducial marks, Historical imagery, Meta-data",
    author = "Felix Dahle and Yushan Liu and Roderik Lindenbergh and Bert Wouters",
    year = "2025",
    doi = "10.1007/s41064-025-00357-8",
    language = "English",
    volume = "93",
    pages = "521--534",
    journal = "PFG - Journal of Photogrammetry, Remote Sensing and Geoinformation Science",
    issn = "2512-2789",
    publisher = "Springer",
    number = "6",
  }
---
