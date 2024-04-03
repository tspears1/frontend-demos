import { css } from 'lit'

export const codeBlockStyles = css`
    :host {
        display: block;
    }

    .code-block {
        & pre {
            background: var(--surface-2);
            border-radius: var(--radius-2);
            min-inline-size: var(--code-block-min-inline-size, var(--size-content-2));
            max-inline-size: var(--size-content-4);
            padding: var(--size-fluid-2) var(--size-fluid-3);
        }

        & code {
            font-family: var(--font-mono);
            letter-spacing: var(--font-letterspacing-1);
            line-height: var(--font-lineheight-3);
        }
        & :where(pre, code) {
            direction: ltr;
            text-align: start;
            white-space: pre;
            word-spacing: normal;
            word-break: normal;
            word-wrap: normal;
            -moz-tab-size: 4;
            -o-tab-size: 4;
            tab-size: 4;
            -webkit-hyphens: none;
            -moz-hyphens: none;
            -ms-hyphens: none;
            hyphens: none;
        }

        & :where(code) {
            background: var(--theme-color-highlight, var(--color-neutral-500));
            border-radius: var(--radius-2);
            color: var(--theme-color-accent, var(--color-neutral-0));
            font-family: var(--font-mono);
            font-size: var(--text-font-size, var(--size-fluid-1));
            letter-spacing: var(--tracking-wider);
            padding: 0.60em;
        }

        & :where(pre) {
            --_pre-color-background:                var(--theme-color-highlight, var(--color-neutral-500));
            --_pre-padding-block-start:             var(--pre-padding-block-start, var(--size-3));
            --_pre-padding-block-end:               var(--pre-padding-block-end, var(--size-3));
            --_pre-padding-inline-start:            var(--pre-padding-inline-start, var(--size-3));
            --_pre-padding-inline-end:              var(--pre-padding-inline-end, var(--size-3));
            background: var(--_pre-color-background);
            border-radius: var(--radius-2);
            display: flex;
            overflow: hidden;
            padding: var(--_pre-padding-block-start) 0 var(--_pre-padding-block-end);
            position: relative;

            &[data-lang] {
                --_pre-padding-block-start:        var(--pre-padding-block-start, var(--size-4));

                &::before {
                    background: var(--theme-color-accent, var(--surface-3));
                    border-radius: var(--radius-2);
                    color: var(--theme-color-background, var(--gray-0));
                    content: attr(data-lang);
                    font-family: var(--font-mono);
                    font-size: 0.625em;
                    font-weight: var(--font-weight-bold);
                    letter-spacing: var(--tracking-wider);
                    line-height: 1;
                    padding: 1em 0.75em;
                    position: absolute;
                    top: 0;
                    right: 0;
                    z-index: 1;
                }

                &::after {
                    background-image:
                        linear-gradient(90deg,  var(--_pre-color-background) 0%, transparent calc(0.75em + var(--_pre-padding-inline-start))),
                        linear-gradient(270deg, var(--_pre-color-background) 0%, transparent calc(0.75em + var(--_pre-padding-inline-end)));
                    content: '';
                    inset: 0;
                    pointer-events: none;
                    position: absolute;
                }
            }

            & :where(code) {
                background: none;
                border-radius: 0;
                overflow-x: auto;
                padding: 0 var(--_pre-padding-inline-end) 0 var(--_pre-padding-inline-start);
            }
        }
    }

    /* PrismJS 1.23.0 - Tomorrow Theme */
    code[class*=language-],pre[class*=language-]{color:#ccc;background:0 0;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}pre[class*=language-]{padding:1em;margin:.5em 0;overflow:auto}:not(pre)>code[class*=language-],pre[class*=language-]{background:#2d2d2d}:not(pre)>code[class*=language-]{padding:.1em;border-radius:.3em;white-space:normal}.token.block-comment,.token.cdata,.token.comment,.token.doctype,.token.prolog{color:var(--cyan-4)}.token.punctuation{color:var(--gray-2)}.token.attr-name,.token.deleted,.token.namespace,.token.tag{color:var(--red-5)}.token.function-name{color:var(--blue-4)}.token.boolean,.token.function,.token.number{color:var(--orange-6)}.token.class-name,.token.constant,.token.property,.token.symbol{color:var(--yellow-5)}.token.atrule,.token.builtin,.token.important,.token.keyword,.token.selector{color:var(--purple-4)}.token.attr-value,.token.char,.token.regex,.token.string,.token.variable{color:var(--lime-5)}.token.entity,.token.operator,.token.url{color:var(--teal-4)}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}.token.inserted{color:green}
`