from dash import Dash, html
import dash_react_syntax_highlighter

app = Dash(__name__)

sample_code = """
def greet(name):
    return f"Hello, {name}!"

print(greet("World"))
"""

app.layout = html.Div([
    html.H1("Dash React Syntax Highlighter - Dark Theme"),
    dash_react_syntax_highlighter.DashReactSyntaxHighlighter(
        code=sample_code,
        language="python",
        styleName="dark"
    )
])

if __name__ == "__main__":
    app.run_server(debug=True)
