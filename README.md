# Daily_Organizer
A simple planner for your busy day!

# Objective
To have a website that saves events to local storage to organize your day. 

# Initial Behavior
- Website only displays a header. 

# Current Behavior
- Website displays the current day and time on the header. 
- Website displays time-blocks with business hours (9AM-5PM). 
- Website displays input text areas next to the time-blocks. 
- Website displays save button next to text areas. 
- Time-blocks are color coded in reference to the current time.
    - Past current time, grey.
    - Same as current time, red. 
    - Before current time, green. 
- Once there is an input in the text area and the user clicks the save button, the event will be saved even when the page is refreshed. 


GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist