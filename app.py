from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Supported platforms
PLATFORMS = {
    'hashnode': 'hashnode.com',
    'medium': 'medium.com',
    'infosecwriteups': 'infosecwriteups.com',
    'devto': 'dev.to',
    'wordpress': 'wordpress.com',
    'hackerone': 'hackerone.com'
}

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        query = request.form.get('query')
        platform = request.form.get('platform')

        if not query or not platform:
            return render_template('index.html', platforms=PLATFORMS, error="Please enter a search term and select a platform")

        if platform not in PLATFORMS:
            return render_template('index.html', platforms=PLATFORMS, error="Invalid platform selected")

        search_url = f"https://www.google.com/search?q={query} site:{PLATFORMS[platform]}"
        return redirect(search_url)

    return render_template('index.html', platforms=PLATFORMS)

if __name__ == '__main__':
    app.run(debug=True)
