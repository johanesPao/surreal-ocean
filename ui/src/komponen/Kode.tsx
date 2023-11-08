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
        <div style={{ backgroundColor: '#1d2021' }}>
            <pre className="overflow-auto" style={{ margin: "0", padding: "0" }}>
                <div className="sticky bg-stone-900 top-0 left-0 right-0 px-4 rounded-full">
                    <span className="text-teks font-mono text-xs">data_penjualan.sql</span>
                </div>
                <div className="relative top-0 left-0 pt-4 pb-4">
                    <code className={`language-${bahasa}`}>{kode}</code>
                </div>
            </pre>
        </div>
    )
}

export default Kode;