# UFOs Analysis

## Overview

### Purpose
Dana is a data journalist who wishes to create a webpage detailing different UFO sightings. We need to use JavaScript and Bootstrap CSS to create a webpage and dynamic table visualizing the UFO data, and create filters to categorize the information by date, city, state, country, and shape. 

## Resources 
- Data source: `data.js`
- Software used: JavaScript, HTML, CSS, and Bootstrap. 

## Results

### Search
To perform a search on the site, navigate to the search bars beneath the header and description and filter though the UFO dataset. 

<img width="947" alt="ufo_sightings" src="https://user-images.githubusercontent.com/108738297/211485000-b90222d4-7e63-4905-b03f-5bf8a6b307ac.PNG">

The filters include Date, City, State, Country, or (UFO) Shape. 

<img width="243" alt="filter_search" src="https://user-images.githubusercontent.com/108738297/211485044-343c68be-f981-4233-94ec-a6a856c73f42.PNG">

Simply type the desired specification into the search bar, following the greyed-out template to receive the search results in the table to the right. 

<img width="900" alt="filter_result" src="https://user-images.githubusercontent.com/108738297/211487040-9000102c-ed55-4468-8ced-fa48d8c8924a.PNG">

## Summary 

### Drawbacks
One of the major drawbacks with the application of the webpage is the knowledge users would need to have when filtering the data. They would need to know what information is already included in the dataset for the search to filter the data properly, otherwise, nothing happens. 

### Recommendations

Two simple ways the webpage can be improved on: 

1) A more robust filtering system where you can add or exclude information in the filters to further specify the data you want to find. For example, it would be beneficial for people to see data within a given timeframe instead of a specific date (Ex: between the years of 2010 and 2014), or to be able to filter data to include or exclude distinct locations.

2) Finding a way to filter the data without prior knowledge of what information is already stored would be better than having nothing happen if there is no data available. Even if there is not information stored on the webpage, a message that says "N/A" or "No data available." would be a good indication that the search bar is working, there is just no data for the specific filters that were inputted.
