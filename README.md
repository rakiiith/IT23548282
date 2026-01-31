Playwright Test Automation – Assignment
Overview

This project contains automated test cases written using Playwright and VS Code to verify positive, negative, and UI functional test cases of a login feature.

A total of 34 test cases are covered:

23 Positive functional test cases

10 Negative functional test cases

1 UI functional test case

All tests can be executed together and results are shown using the Playwright HTML report.

Project Structure
tests
├─ positive
│  └─ pos_fun.spec.ts    (23 positive functional tests)
├─ negative
│  └─ neg_fun.spec.ts    (10 negative functional tests)
└─ ui
   └─ ui_fun.spec.ts     (1 UI functional test)

Prerequisites

Make sure the following are installed on your machine:

Node.js (LTS version recommended)

VS Code

Playwright VS Code Extension

Installation Steps

Open the project folder in VS Code

Open the terminal in VS Code

Install project dependencies:

npm install


Install Playwright browsers:

npx playwright install


These steps are required only once.

Test Configuration

Update the BASE_URL in each test file with the actual login page URL.

Ensure selectors (username, password, login button) match the application under test.

How to Run All Test Cases

To execute all 34 test cases, run:

npx playwright test


Expected result:

Running 34 tests
34 passed

How to View Test Report

After execution, open the Playwright HTML report using:

npx playwright show-report


The report displays:

Total number of tests

Passed / failed status

Execution time

Browser details

Screenshots from this report can be used for assignment submission.

Mapping with Test Case Document (Excel)

TC ID in Excel matches the test names in Playwright
(e.g., Pos_Fun_0001, Neg_Fun_0001, Neg_UI_001)

Status column is updated after execution (Pass/Fail)

Actual Output and Accuracy Justification are filled only if a test fails
