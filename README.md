# Jillian Brown Portfolio

This project was created by Casey Ferrara for Jillian Brown to be used as a graphic design portfolio. The application allows users to view about images, projects, and even contact Jillian via email. There is also a restricted admin page that can only be accessed by Jillian via Auth0 Google login. The admin page allows for new projects/about images to be added, existing projects to be edited, and existing projects/about images to be deleted. The tech stack for this application is React, NodeJS, and PostgreSQL.

## Public Components

The following components can be accessed by any user in the graphic design web application:

### about

![about component](https://live.staticflickr.com/65535/52643427910_013d4fe065_k.jpg)

This is an about section that displays a brief about summary, icons, and about images.

### portfolio

![portfolio component](https://live.staticflickr.com/65535/52643247319_7ea856266d_k.jpg)

The portfolio component displays projects uploaded by the admin.\ 
There is currently a 8 project limit per page to allow for a better user experience.\
Each project shows the user an image, project title, and project category.\
All of the project information can be displayed by clicking on the info icon.

### contact

![contact component](https://live.staticflickr.com/65535/52642485077_30355dc3e1_k.jpg)

The contact component is a simple form (name, email, and message) created with MUI.\ This component also includes the footer at the bottom. The server uses nodemailer to send an email via Gmail to the admin.

### login

![login component](https://live.staticflickr.com/65535/52642485057_1278a29f3e_k.jpg)

Any user can access the login page (there is not a link accessible on the home page)

### unauthorized

![unauthorized](https://live.staticflickr.com/65535/52643462848_7e1316da84_k.jpg)

If a user is not able to successfully login via Auth0 Google login (their email must match in the database), they will be shown this unauthorized page.

## Restricted Component

The following components can only be accessed by the admin in the graphic design web application:

### admin

![admin (existing projects) component](https://live.staticflickr.com/65535/52642485047_41efb7fa77_k.jpg)
![admin (about images) component](https://live.staticflickr.com/65535/52643462778_5b4bab5a4b_k.jpg)

Once the admin successfully logs in via Auth0 Google login they are redirected to the admin component.\ All existing projects and about images can be viewed here.

## admin features

These are all of the features included in the admin component:

### add a new project

![add project](https://live.staticflickr.com/65535/52643462803_b18622cee7_b.jpg)

The admin can add a new project to the database and this will get displayed in the portfolio component.

### edit an existing project

![edit project](https://live.staticflickr.com/65535/52643427810_d7d669d743_b.jpg)

The admin can edit any existing project which will be updated in the database and displayed to the user in the portfolio component.

### add an about image

![add about image](https://live.staticflickr.com/65535/52642484987_56a91585f8_b.jpg)

The admin can add a new about image and this will get displayed in the about component.

### delete

![delete project](https://live.staticflickr.com/65535/52642485007_ce6a50df0c_c.jpg)
![delete about image](https://live.staticflickr.com/65535/52643427775_5da840768b_c.jpg)

The admin can delete an existing project or about image.
