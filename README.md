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
2. Import `cpt_ui_export.json` and `acf_export.json` located inside the `exports` folder to WordPress, to get the required custom posts and fields.
3. Install NPM packages
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