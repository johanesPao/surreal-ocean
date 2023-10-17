import { useEffect } from "react"
import Prism from 'prismjs';
import '../css/komponen/Kode.gruvbox.css';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-rust';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-json';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import { KodeProps } from "../props/Kode.props";

const Kode = ({ kode, bahasa }: KodeProps) => {
    useEffect(() => {
        Prism.highlightAll();
    }, []);
    return (
        <pre style={{ margin: "0" }}>
            <code className={`language-${bahasa}`}>{kode}</code>
        </pre>
    )
}

export default Kode;