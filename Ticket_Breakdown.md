# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### Task 1: Add Custom ID Field to Agents Table

Summary: This task will involve adding a new field to the Agents table which will allow Facilities to save their own custom IDs for each Agent they work with.

Details:

- Add a new `custom_id` field to the Agents table
- Ensure that the `custom_id` field accepts alphanumeric characters and is unique for each Agent
- Allow Facilities to update the `custom_id` field from their dashboard

Acceptance Criteria:

- The `custom_id` field is successfully added to the Agents table and is unique for each Agent
- The `custom_id` field can be updated by Facilities from their dashboard

Estimated time/effort: 4-6 hours


### Task 2: Update Shifts with Custom ID

Summary: This task will update the Shifts table to include the custom ID of the Agent assigned to each shift, allowing the custom ID to be used in the report generation process.

Details:

- Update the Shifts table to include the `custom_id` field from the Agents table
- Populate the `custom_id` field for each shift based on the Agent assigned to that shift

Acceptance Criteria:

- The Shifts table is successfully updated to include the `custom_id` field from the Agents table
- The `custom_id` field is successfully populated for each shift based on the Agent assigned to that shift

Estimated time/effort: 2-3 hours
