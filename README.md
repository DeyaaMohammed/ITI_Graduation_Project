# ITI Graduation Project - Performance Testing with JMeter
Welcome to the repository for my ITI graduation project, where I conducted a comprehensive performance testing on the [OpenCart platform](https://opencart.abstracta.us/) using JMeter. This project features various scenarios to evaluate the platform's responsiveness and stability under different conditions.

## Table of Contents
- [Project Overview](#project-overview)
- [Directory Structure](#directory-structure)
- [Prerequisites](#prerequisites)
- [Demo Video](#demo-video)
- [Contributions](#contributions)
- [Acknowledgments](#acknowledgments)

## Project Overview
As part of this project, I focused on the following key aspects:

### 📋 End-to-End Scenarios
- 🛍️ Registration and 1st Purchase Scenario:
  - Implemented using the JMeter Script Recorder.
  - Covered the entire process from user registration to completing the 1st purchase.
- 🛍️ Login and 2nd Purchase Scenario:
  - Implemented using the JMeter Script Recorder.
  - Covered the entire process from user login to completing the 2nd purchase.
- ⚙️ Utilized essential JMeter components such as Assertions, Logic Controllers, Listeners, and Regular Expression Extractors to handle dynamic variables and enhance result accuracy.

### 📈 Load Testing
- Examined platform responsiveness under normal and peak loads.
- Using jp@gc - Stepping Thread Group and jp@gc - Ultimate Thread Group

### 📈 Stress Testing
- Evaluated the platform's stability and behavior under stress conditions.
- Using jp@gc - Stepping Thread Group and jp@gc - Ultimate Thread Group

### 📈 Spike Testing
- Analyzed how the platform responds to sudden increases in load.
- Using jp@gc - Ultimate Thread Group

### 📈 Endurance Testing
- Tested the platform's stability over an extended period.
- Using jp@gc - Ultimate Thread Group

### 🆗 API Performance Testing
- Tested the performance of the API.
- Covering GET, POST, PUT, and DELETE requests.

### 📂 FTP Server Performance Testing
- Tested the performance of the FTP server.
- Covering the upload and download scenarios.

### 🗄️ SQL Server Local Database Performance Testing
- Used JDBC Connection to test the performance of the local SQL server database.

### 🗄️ MySQL Online Database Performance Testing
- Used [db4free.net/phpMyAdmin](https://www.db4free.net/phpMyAdmin/) through JDBC Connection to test the performance of the online MySQL database.
- Covering reading and writing to the database.

### 📧 Email Server Performance Testing
- Performed performance testing using SMTP Connection.

### 📊 Reporting
- Generated test reports in both CSV and HTML formats using:
  - Non-GUI Mode (CMD).
  - JMeter GUI Mode.

## Directory Structure
The repository is organized as follows:
- `output/`: Contains output files from the FTP performance test.
- `presentation/`: Includes the presentation file used as an introduction to performance testing during the project presentation.
- `resources/`: Contains files used in FTP upload performance testing, search data and test data CSV files.
  - `Search Data.csv`: Contains search keywords for product searches on the OpenCart platform.
  - `Test Data.csv`: Includes First names, Last names, Emails, Mobile numbers, and Passwords for registration and login scenarios.
- `results/`: Holds the CSV and HTML reports generated from the conducted tests.
  - `XXX HTML Report/`: Includes the HTML Report generated by running each test case individually.
  - `All HTML Report/`: Contains the HTML Report generated by executing the entire test plan.
  - `XXX.csv`: The CSV Report generated by running each test case individually.
  - `AllReport.csv`: The CSV Report generated by executing the entire test plan.
- `Project.jmx`: Main JMeter test plan featuring all performance test cases.

## Prerequisites

Install [**JMeter Plugins Manager**](https://jmeter-plugins.org/wiki/PluginsManager/) and the following Plugins:
- 3 Basic Graphs
- Custom Thread Groups

Add the following jar files in `lib` folder of JMeter or include them in the `Test Plan`:
- [MySQL Connector/J - Platform Independent](https://dev.mysql.com/downloads/connector/j/)
- [Microsoft JDBC Driver for SQL Server](https://learn.microsoft.com/en-us/sql/connect/jdbc/download-microsoft-jdbc-driver-for-sql-server?view=sql-server-ver16#download)
- [JavaMail](https://javaee.github.io/javamail/)


## Demo Video
The demo video is available [here](https://www.linkedin.com/posts/deyaamohammed_im-thrilled-to-present-to-you-a-demonstration-activity-7093990960862261248-rD-5?utm_source=share&utm_medium=member_desktop).\
This demo video provides a walkthrough of the ITI graduation project, showcasing the performance testing of the OpenCart platform using JMeter. The video covers all the aspects of the project.\
By watching this demo video, you can gain a comprehensive understanding of the project's scope and objectives, as well as the effectiveness of the performance testing methodology employed.

## Contributions
Contributions to this project are welcome. If you find issues, have suggestions, or want to add more test cases, please feel free to create issues or submit pull requests.

## Acknowledgments
I would like to express my gratitude to the Information Technology Institute (ITI) for providing the opportunity to work on this graduation project. Special thanks to my colleagues for their guidance and support throughout the project.

If you have questions or need further assistance, please don't hesitate to reach out.
