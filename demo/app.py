import dash_react_syntax_highlighter
from dash import Dash, html, dcc, Input, Output, callback

app = Dash(__name__)

sample_code = """
def fibonacci(n):
    if n <= 1:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)

# Print the first 10 Fibonacci numbers
for i in range(10):
    print(f"Fibonacci({i}) = {fibonacci(i)}")
""".strip()

style_options = ["dark", "coy", "okaidia", "twilight", "solarizedlight"]

app.layout = html.Div(
    [
        dcc.Dropdown(
            id="style-selector",
            options=[{"label": style, "value": style} for style in style_options],
            value="okaidia",
            style={"width": "200px", "marginBottom": "10px"},
        ),
        dash_react_syntax_highlighter.DashReactSyntaxHighlighter(
            id="input", code=sample_code, language="python", styleName="okaidia"
        ),
    ]
)


@callback(Output("input", "styleName"), Input("style-selector", "value"))
def update_style(selected_style):
    return selected_style


if __name__ == "__main__":
    app.run_server(debug=True)
