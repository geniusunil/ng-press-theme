# Acknowledgements
This project makes use of the following open source projects/ tutorials :

 - https://medium.com/@factoryhr/how-to-use-wordpress-api-and-angular-2-cab636176548
 - https://github.com/WarriorRocker/angular-xo-core
 - https://github.com/WarriorRocker/angular-xo-material

# Requirements
php 7 or higher.

# How it works
This standalone theme fetches posts, users and everything from a wordpress site via Wordpress REST API and displays them in an angular app.

# How to install
Just download the files and use as a wordpress theme.

# How to develop (https://github.com/WarriorRocker/angular-xo-material)

## Development

This theme additionally comes with all source files and configuration info necessary to develop, modify, and debug the Angular App running within the theme.

### Local Server

Just as your Angular App can run with `ng serve` your WordPress will also need to run on a server. I recommend XAMPP for beginners, though the below should work for any apache server.

#### XAMPP on Windows
1. Download your entire WordPress installation and place the files at: `C:\Projects\AngularXoMat`. If the path does not exist, create the `Projects` folder first and then `AngularXoMat` inside. This can be a path anywhere on your machine, inside should be the `index.php` file and `wp-content` folder for example. Make sure if you have an `.htaccess` file that it has been copied as well, sometimes this file is hidden depending on your view settings.

2. Add a virtual DNS entry for `angularxo.local`. Otherwise the site must work at the root or sub folder of `localhost` which can be messy when working on multiple projects. This entry will tell the browser that the data for this domain should come a server on our local machine.
   1. Open notepad as Administrator.
   2. File -> Open -> `C:\windows\system32\drivers\etc\hosts`.
   3. On a new line at the bottom add `127.0.0.1		angularxo.local`.
   4. Save.
   
3. Add a virtual host entry in `httpd.conf`. This is necessary to point `angularxo.local` to our local WordPress directory at `C:\Projects\AngularXoMat`.
   1. Open notepad or your editor of choice.
   2. File -> Open -> `C:\xampp\apache\conf\httpd.conf`.
   3. On a new line at the bottom add the below
    ```
    <VirtualHost *:80>
      ServerName angularxo.local
      DocumentRoot "C:\Projects\AngularXoMat"    
      <Directory "C:\Projects\AngularXoMat">
        Options Indexes FollowSymLinks MultiViews
        AllowOverride all
        Require all granted
      </Directory>
    </VirtualHost>
    ```
   4. Save and restart apache.
   
4. Visit `http://angularxo.local` in your browser. The `http://` protocol portion is important as browsers such as Chrome may attempt to search for the unknown domain. Typing the protocol portion forces the browser to load the domain propertly.

### Angular CLI

It is possible to use the Angular CLI to build, modify, and add new modules and components. This theme comes with several shortcuts for running the `ng serve` local development server and `ng build` with the right arguments that are compatible with WordPress and Xo.

1. First open a command prompt.

#### Building with ng build

The easiest method as it makes use of your previously configured server to access your WordPress as normally through `http://angularxo.local`. This can be accomplished using one of the following commands:

- `npm run build` or `ng build --deploy-url /wp-content/themes/angular-xo-material/dist/`
  - Run a build to the dist folder at `/wp-content/themes/angular-xo-material/dist/`. This is important as unlike a typical Angular App where the files in the `/dist/` folder are deployed to the root of the server these files are actually nested within the theme folder in WordPress.
  - The Angular App will be in debug mode which may emit more verbose information on the console, additional resource map files, and assets and application files will not be minified.
  
- `npm run deploy` or `ng build --prod --deploy-url /wp-content/themes/angular-xo-material/dist/`
  - The same as `npm run deploy` except assets and application code are minified with the Angular App configured for production.

- `npm run watch` or `ng build --watch --deploy-url /wp-content/themes/angular-xo-material/dist/`
  - The same as `npm run deploy` except once the initial compilation is complete the script will be placed into a watch mode for file changes that may trigger recompliation. A refresh of the page is required to see the updated changes.

#### Building with ng serve

Running with `ng serve` we need a way to reference our local `angularxo.local` server from within the live server typically running at `localhost:4200`. This is made possible by adding an additional build configuration invoked by running the below command:

- `npm run serve` or `ng serve --configuration local`
  - Run `ng serve` and include the App Config specified in `/src/environments/environment.local.ts` within the theme folder.

If you run the local WordPress server from a host other than `angularxo.local` it is required that this be updated in the local environment file at `/src/environments/environment.local.ts` within the theme folder.




