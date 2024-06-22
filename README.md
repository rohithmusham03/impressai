## Setup/Installations
* Install dependencies 
  * for server : ``npm install``
 * Run server (in main directory of project) ``npm start``

## APIS
**[GET]**   http://example.com/users

**[POST]**   http://example.com/user
```
{
    name:<string>,
    email:<string>
}
```
**[PUT]**   http://example.com/user/:id
```
{
    name:<string>,
    email:<string>
}
```

**[DELETE]**   http://example.com/user/:id

## LEVELS

### Level 1 
- Add CSS:
	- [ ] I added CSS for the button
- Fix Existing Issues:
	- [ ] In the commonInput.js file, the button does not trigger the handleSubmit function. I updated the button to call the handleSubmit function when clicked.

![Screenshot 2024-06-23 020213](https://github.com/rohithmusham03/impressai/assets/124354810/746db2dd-aaec-483b-b788-cfcbe169ed0f)

- Added Error message for incorrect email:
	- [ ] I also added an error message to show if the email address is not mentioned fully.

![image](https://github.com/rohithmusham03/impressai/assets/124354810/ef619848-3f3e-4c45-9f52-e396046d1c9b)



### Level 2
- Integrated Antd components
	- [ ] Table: I Used  Ant Design's table component to display the data.
	- [ ] Buttons: I  Replaced existing buttons with Ant Design's button components.
	- [ ] Inputs: I Used Ant Design's input components for forms.
- Fixed Existing Issues: 
	- [ ] Form Reset on Submission: I Ensured that after submitting the form, the values in the name and email input fields are cleared.

![image](https://github.com/rohithmusham03/impressai/assets/124354810/ca60d521-444a-4c20-a88c-90d4a49f2a75)




### Level 3
- Added delete functionality:
	- [ ] Delete for Each User: I Implemented a delete feature for each user entry

![image](https://github.com/rohithmusham03/impressai/assets/124354810/c2fe502e-f237-4c85-a41e-d26c3170e5ea)





### Level 4
- Added edit functionality:
	- [ ] Edit for Each User: I Implemented an edit feature for each user entry

![image](https://github.com/rohithmusham03/impressai/assets/124354810/f223ab66-9191-4565-864e-9336e73174fb)




### Bonus level
- [ ] Maintained separate reducer - I created and managed a separate reducer for storing the details of the currently edited user.
- [ ] Added Confirmation for Deletion - I implemented a confirmation dialog that asks for user approval before deleting a user entry.

![image](https://github.com/rohithmusham03/impressai/assets/124354810/40a45148-3d97-43de-9361-07f447fb8fa8)



