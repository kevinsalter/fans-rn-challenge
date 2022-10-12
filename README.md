
## Fansunite React Native Technical interview

------
### 👉 **Setup:**

The repo you will be cloning down is a react native expo project. Please ensure you have your environment setup and can run an `iOS` or `android` simulator as you will be required to have it open while working on this task.

You can clone the project at:
```bash
git clone https://github.com/kevinsalter/fans-rn-challenge.git
```

Run `npm install` and then `expo start` to get started.

### 👉 **Details:**

The following app is of an admin portal where the user can view, search, filter and remove employees from the list. Your task will be to refactor the existing code and make some additions based on the requirements below. Here is a brief summary of what you'll be doing:

- Fetch data of employees from the API provided and render the results in a list
- Add the ability to remove an employee from the list
- Add the ability to navigate to a specific employee screen that shows additional information.
- Filter the results via a text input on the home screen, handling an empty state if no results

Remember, there are no wrong answers, the most important part of this challenge is to talk through your processes and thoughts out loud. You are free to rename any functions or variables and are encouraged to utilize google and the references provided if you need.

You will have 45 minutes to complete the task. Good luck!

--
### 👉 **Challenge Requirements**

-   Fetch the data on mount for the employees. The endpoint to retrieve the data is already imported for you inside `HomeScreen.tsx`, There are also notes and references below in the `Technical and API notes` section below on the service we're using for this.
-   Store the result of the API call in your choice of state management (`useState/useReducer`, `Context`, `Redux` etc).
-   The data should be rendered as a vertical scrollable list. We've provided a pre built `EmployeeCard` component to render each employee on, currently filled with mock data.
-   You will need to remove the mock data and display the following information from each employee inside the `EmployeeCard` component
    -   image
    -   first and last name
-   Add the ability to remove an employee via press of the remove button rendered on the `EmployeeCard` component.
-   Each employee card should be pressable, that should take you to the `EmployeeScreen` (pre-built component) which will render that single employees details - you will need to both hook this screen up inside the navigator and pass the employee into the screen as a param.
-   On the `EmployeeScreen`, display the following data inside the `Employee` component.
    -   image
    -   first and last name
    -   phone number
    -   email
-   On the `HomeScreen`, add the ability to filter for an employee by first name. The employee list should update to display the new filtered results.
-   If there are no results, render an empty state that displays 'No Employees Found'


**⭐️ Bonus Parts**

These parts are **not necessary** for task completion but if you reach here with time left, try to implement the following:
-   Add platform specific styling so the `StatusBar` component rendered inside `HomeScreen.tsx` is visible on both `iOS / Android` - currently, the 'light-content' `barStyle` doesn't display correctly for `iOS`
-   Add pull to refresh functionality on the employee list.
-   Debounce the input for performance enhancements
-   Swipe to delete functionality for the employees

------

### 👉 **What is already built for you?**

-   The `HomeScreen` and `EmployeeScreen` are already created. **You will need** to add the `EmployeeScreen` to the `StackNavigator` inside `App.tsx` to be able to navigate to it.
-   A demo view of the `HomeScreen`, displaying some mock data.
-   Component templates for both the `EmployeeCard` rendered on the `HomeScreen`, and the `Employee` rendered on the `EmployeeScreen`
-   Types for the API response data are available to use/look at from the `./types.ts` files
-   Basic styles for all components.

--

### 🚨 **Technical and API Notes:**

-   The project uses react-navigation for its screen/navigation structure and logic.
-   Notes on passing params to screens are here if required: https://reactnavigation.org/docs/params
-   The API we will be using is a free service called faker.
-   The endpoint is stored in a variable inside the `api/index.ts` file.
-   While types are added for clarity and modelling, using `Typescript` is optional. You can place a '`// @ts-nocheck`' comment to the top of all files to silence errors.
