## Getting Started

Follow the instructions below to run this project on your machine.

### Prerequisites

To run this project, you need to have a WordPress website set up with wp-json enabled and the following plugins installed: 
* Custom Post Types UI
* Advanced Custom Fields Pro
* ACF To REST API


### Installation

1. Clone the repo
```sh
https://github.com/Genitaa/burger-king-app
```
2. Import the following files into WordPress to get the required custom posts and fields.
	-  In the admin panel, go to CPT UI > Tools and paste the content from `cpt_ui_export.json` to import Custom Post Types 
	-  In the admin panel, go to Custom Fields > Tools and choose `acf_export.json` to import Custom Fields
	- In the admin panel, go to Tools > Import, select WordPress and choose `products_export.xml`  to import the pre-populated products
3. Install NPM packages. (Images will not be imported.)
```sh
npm install
```

4. Copy `.env` to `.env.local`  and set your local environment variables
```
REACT_APP_API_URL=<hostname>:<port>
```

<!-- USAGE EXAMPLES -->
## Usage

To add new products, navigate to your WordPress admin panel and create new posts of type Product.
