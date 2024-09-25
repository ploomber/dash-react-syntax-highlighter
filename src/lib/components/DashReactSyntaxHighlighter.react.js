import React from 'react';
import PropTypes from 'prop-types';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark, coy, okaidia, twilight, solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

/**
 * DashReactSyntaxHighlighter is a component for syntax highlighting.
 * It takes properties for the code to highlight, the programming language, and the style.
 */
const DashReactSyntaxHighlighter = (props) => {
    const { id, code, language, styleName } = props;

    const styleMap = {
        dark: dark,
        coy: coy,
        okaidia: okaidia,
        twilight: twilight,
        solarizedlight: solarizedlight
    };

    const style = styleMap[styleName] || okaidia;  // Default to 'okaidia' if styleName is not recognized

    return (
        <div id={id}>
            <SyntaxHighlighter language={language} style={style}>
                {code}
            </SyntaxHighlighter>
        </div>
    );
}

DashReactSyntaxHighlighter.defaultProps = {
    language: 'javascript',
    styleName: 'okaidia'  // Set default style to 'okaidia'
};

DashReactSyntaxHighlighter.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * The code string to be highlighted.
     */
    code: PropTypes.string.isRequired,

    /**
     * The programming language of the code.
     */
    language: PropTypes.string,

    /**
     * The name of the style to use for syntax highlighting.
     * Options are: 'dark', 'coy', 'okaidia', 'twilight', 'solarizedlight'
     */
    styleName: PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

export default DashReactSyntaxHighlighter;
