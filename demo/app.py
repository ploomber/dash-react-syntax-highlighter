import dash_react_syntax_highlighter
from dash import Dash, html

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
        html.H1("Syntax Highlighting Styles"),
        *[
            html.Div(
                [
                    html.H2(style),
                    dash_react_syntax_highlighter.DashReactSyntaxHighlighter(
                        code=sample_code, language="python", styleName=style
                    ),
                ]
            )
            for style in style_options
        ],
    ]
)

if __name__ == "__main__":
    app.run_server(debug=True)
