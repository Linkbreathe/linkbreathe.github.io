--- 
title: DAVI Data Preprocessing - redo
author: <weixiong_626> 
date: 2024-12-18 13:30:00 +0200
categories: [Data Visualization,Redo] 
math: true 
tags: []  
---
# Lecture Notes

**Date & Context:** These notes summarize a lecture covering data pre-processing, data wrangling, data quality checks, and preparation for the upcoming "Black Hat Visualization" exercise. The professor emphasizes the importance of understanding data characteristics, handling missing or problematic values, and using transformations or aggregations as needed. At the end, instructions for the Black Hat Visualization exercise are provided, encouraging students to create intentionally misleading visualizations from a given dataset.

---

## Data Pre-Processing Overview

Data pre-processing involves three main stages:

1. **Data Profiling:**  
   Understanding how to access the data, how to parse it, and verifying that the data is complete and trustworthy.
   
2. **Data Wrangling:**  
   Handling issues in the data, such as missing values, duplicates, formatting problems, and poor data quality.
   
3. **Data Transformation:**  
   Reducing data to a more manageable form through techniques like sampling, aggregation, or clustering.

The goal is to produce a data set that is consistent, trustworthy, and easier to visualize.

---

## Data Profiling

**Definition:** Diagnosing a new or unknown dataset’s characteristics before visualization.

**Key Considerations:**
- **Access Modalities:** How often can you query the dataset? Are there rate limits or restrictions (e.g., Twitter APIs, paid databases)?
- **Parsing the Data:**
  - Character encodings: ASCII, UTF-8, ISO, etc.
  - Numerical formats: Is the data in integers, floats, etc.?
  - Date and time formats: Are dates in DD/MM/YYYY or MM/DD/YYYY? Are times in UTC or local time?
  - Geospatial coordinates: Are they in degrees, minutes, seconds, decimal degrees, or specialized formats like UTM?
  
- **Checking Plausibility & Units:**
  - Validate against known formats (e.g., IP addresses, license plates).
  - Confirm plausible value ranges (e.g., lat between -90° and +90°, temp > absolute zero).
  - Look for suspicious placeholder values (e.g., 100% salinity or 100% oxygen marking missing data).
  
- **Consistency Checks & Distributions:**
  - Check if sensor data follow expected distributions (e.g., Benford’s law for first-digit distribution).
  - Identify out-of-order timestamps or impossible values.
  - Confirm data structure topologies (e.g., ensuring managerial hierarchies are true trees without cycles).

**Examples:**
- Climate data often requires applying a “rotated pole” transformation. Different visualization tools may fail to interpret this correctly, leading to misaligned or nonsensical maps.
- As a rule of thumb, always verify that your tool parses standards (like NetCDF) correctly. Different software implementations vary.

**Takeaways:**
- Always validate data against real-world constraints.
- Standards are helpful but not absolute; multiple versions and partial implementations are common.
- Even standardized data may require extra domain knowledge to interpret.

---

## Data Wrangling

**Definition:** Making raw data usable by addressing missing values, duplicates, and other quality issues.

### Handling Missing Data

- **Real-World Example:** The 1890 U.S. census data was lost in a fire. The dataset might show a placeholder (like zero) where data is actually missing.
- **Why Deal with Missing Values?** Missing values can distort summaries and visualizations, squashing scales or misleading trends.

**Methods to Handle Missing Values:**
1. **Deletion:**
   - If less than 5% missing, consider row-wise deletion (remove records with missing values).
   - If more than 40% missing in an attribute, consider dropping the entire attribute.
   - These are rules of thumb; actual decisions depend on the analysis context.
   
2. **Imputation:**
   - **Last Observation Carried Forward (LOCF):** Use the last known value until a new valid one appears.
   - **Mean Value Imputation (for continuous data):** Replace missing values with the mean.
   - **Median Value Imputation (for ordinal data):** Replace missing values with the median.
   - **Mode Value Imputation (for categorical data):** Replace missing values with the most frequent category.
   - **Linear/Logistic Regression-based Imputation:** Use known relationships between variables to estimate the missing value.
   
3. **Pairwise Deletion:**
   - Only exclude a data record from analyses involving the missing attribute.
   - Downside: Different analyses produce results from different subsets, limiting comparability.
   
4. **Visualization Approaches for Missing Data:**
   - **Missingness Maps:** Show missing values per attribute and record as a heatmap of completeness.
   - **Adding “Missing” Bins or Categories:** For histograms or bar charts, include a separate bin for missing values.
   - **Scatterplots with Marginal Bars:** Place items missing the Y-value on the X-axis line, and those missing the X-value on the Y-axis line. Items missing both could be shown in a separate reference area.

### Handling Duplicate Data

- **Duplicates:** Multiple entries representing the same entity.
- **Deduplication Strategies:**  
  - Use unique identifiers (e.g., CPI, SSN).  
  - If unavailable, use quasi-identifiers (combinations of name, birthdate, etc.).
- **Fuzzy Matching & Phonetic Algorithms:**  
  - Metaphone, Double Metaphone, Soundex, etc.  
  - Can handle variations in spelling and help group similar entries.

### Data Quality & Uncertainty

- **Uncertainty Sources:**
  - Measurement errors, biased measurements, human-entered data, simulations with stochastic elements.
- **Practical Example:**
  - Checking suspiciously “perfect” sensor values (like exactly 20.0000) might indicate manual tampering or missing data placeholders.

---

## Data Transformation

**Goal:** Reduce complexity and size of data without losing essential insights.

**Methods:**
- **Sampling:**  
  - Random Sampling: Uniform random selection of subsets.
  - Stratified Sampling: Random sampling that preserves the proportion of subgroups.
  - Quota Sampling: Non-random but ensures certain subgroup quotas are met.
  
- **Aggregation & Clustering:**  
  - Instead of individual data points, show aggregates (e.g., cluster centers or hulls).
  - Useful for scaling visualizations across devices of different sizes.
  - Example: Aggregate large datasets into hierarchical representations, allowing different levels of detail depending on screen size.

**Key Idea:**  
Adjust the level of detail for the display or for analytical goals. For instance, cluster thousands of points, show bounding shapes, or step through aggregation levels.

---

## Example Issues & Guidance

- **Excel & Dates:** Default “epoch” date differs on Windows vs. Mac (1900 vs. 1904), causing confusion. Be aware of such quirks.
- **Adjusting for Inflation in Financial Data:**  
  - Always consider inflation-adjusted values for monetary comparisons over time.
  - Tools: Python’s CPI module, inflation indices from reliable databases.

---

## Black Hat Visualization Exercise (Wednesday)

**Overview:**
- Students will create intentionally misleading visualizations.
- Dataset: Yearly average temperatures for four U.S. cities (Dallas, Denver, Oklahoma City, Seattle).
- May use the entire dataset or just one city.
- Final output due by **Tuesday 8 p.m.** to Brightspace (PDF, PNG, or JPEG).
- On Wednesday, we will present and analyze each other’s misleading charts.

**Rules:**
- **Do not falsify data:** You must use the given data, but you can transform, smooth, or rearrange it.
- **Any Tool Allowed:** Spreadsheets, vector graphics editors, or any method you prefer.
- **Categories & Prizes:**
  1. **Strongest (Most Mistakes):** Visualization with the greatest number of distinct misleading design decisions.
  2. **Ugliest (Voted by Class):** Visually unappealing design.
  3. **Most Unethical (Voted by Class):** Chart that best conveys the opposite of the true data message.

**Tips:**
- Consider:
  - Non-zero baselines, distorted axes.
  - Inappropriate color maps.
  - Perspective distortions.
  - Confusing legends or labels.
- However, simply making it unreadable or randomly mapping data does not count as a design “mistake” per se.  
- Try not to spread efforts too thin; pick one category and go all in.

---

## Wrap-Up

- Next week, a recap lecture on the entire first half of the semester.
- It will be a blackboard lecture—if possible, attend in person.
- Revise assigned readings (Munzner’s chapters 2.2.2 and 2.2.3) for the recap session.
- After the lecture: Office hour available for questions on projects or the exercise.

**Key Takeaway:**  
Effective data visualization starts with understanding and cleaning the data. Before attempting any advanced visualization techniques, ensure data quality, format consistency, and handle missing or duplicated entries sensibly. For the Black Hat exercise, break the rules intentionally to understand the principles of ethical visualization better.

**Good luck and have fun with the Black Hat Visualization!**
