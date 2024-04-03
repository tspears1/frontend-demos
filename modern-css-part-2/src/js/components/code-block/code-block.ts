import { LitElement, html } from 'lit'
import Prism from 'prismjs'
import { codeBlockStyles } from './code-block.styles'

export class CodeBlock extends LitElement {
    _markup: string

    static get properties() {
        return {
            lang: { type: String },
        }
    }

    static styles = codeBlockStyles

    constructor() {
        super()
        this._markup = ''
    }

    _decodeHtml(html: string) {
        const txt = document.createElement("textarea")
        txt.innerHTML = html
        return txt.value
    }

    _updateCodeElement(content: string, slot?: HTMLSlotElement) {
        const codeElement = this.shadowRoot?.querySelector('code')
        if (!codeElement) return
        codeElement.innerHTML = Prism.highlight(content, Prism.languages[this.lang ?? 'markup'], this.lang ?? 'markup')
        slot?.remove()
    }

    connectedCallback() {
        super.connectedCallback()
        this.updateComplete.then(() => {
            const slot = this.shadowRoot?.querySelector('slot')
            if (!slot) return
            if (this.lang == 'html') {
                let code = slot?.assignedElements().map((node) => node.outerHTML)
                if (code) {
                    this._markup = this._decodeHtml(code.join(''))
                    this._updateCodeElement(this._markup, slot)
                }
            } else {
                let code = slot?.assignedNodes().map((node) => node.textContent)
                if (code) {
                    this._updateCodeElement(code.join(''), slot)
                }
            }
        })
    }

    render() {
        return html`
            <div class="code-block">
                <pre data-lang=${this.lang ?? ''}>
                    <code class=${this.lang ? 'language-' + this.lang : ''}>
                        <slot></slot>
                    </code>
                </pre>
            </div>
        `
    }
}

customElements.define('code-block', CodeBlock)