import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark, coy, okaidia, twilight, solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

/**
 * DashReactSyntaxHighlighter is a component for syntax highlighting.
 * It takes properties for the code to highlight, the programming language, the style, and an optional parameter to allow copying the snippet to the clipboard.
 */
const DashReactSyntaxHighlighter = (props) => {
    const { id, code, language, styleName, allowCopy } = props;
    const [buttonLabel, setButtonLabel] = useState('Copy');
    const [buttonStyle, setButtonStyle] = useState({
        position: 'absolute',
        top: '10px',
        right: '10px',
        backgroundColor: 'darkgray',
        color: 'white',
        border: 'none',
        padding: '5px 10px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '12px',
        margin: '4px 2px',
        cursor: 'pointer',
        borderRadius: '4px'
    });

    const styleMap = {
        dark: dark,
        coy: coy,
        okaidia: okaidia,
        twilight: twilight,
        solarizedlight: solarizedlight
    };

    const style = styleMap[styleName] || okaidia;  // Default to 'okaidia' if styleName is not recognized

    const copyToClipboard = () => {
        navigator.clipboard.writeText(code);
        setButtonLabel('Copied!');
        setTimeout(() => {
            setButtonLabel('Copy');
        }, 1000);
    };

    return (
        <div id={id} style={{ position: 'relative' }}>
            {allowCopy && (
                <button
                    onClick={copyToClipboard}
                    style={buttonStyle}
                >
                    {buttonLabel}
                </button>
            )}
            <SyntaxHighlighter language={language} style={style}>
                {code}
            </SyntaxHighlighter>
        </div>
    );
}

DashReactSyntaxHighlighter.defaultProps = {
    language: 'javascript',
    styleName: 'okaidia',  // Set default style to 'okaidia'
    allowCopy: true  // Enable copy to clipboard by default
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
     * Optional parameter to allow copying the snippet to the clipboard.
     */
    allowCopy: PropTypes.bool,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

export default DashReactSyntaxHighlighter;
