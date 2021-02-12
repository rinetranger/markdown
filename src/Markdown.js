import React, {Component} from 'react';
import styles from './Markdown.module.css';
import marked from 'marked';

class Markdown extends Component{
    constructor(props){
            super(props);
            this.state={
                thml:""
            };
        this.updateMarkdown = this.updateMarkdown.bind(this);
        }

        updateMarkdown(e){
            this.setState({
                html: marked(e.target.value)
            });
        };
        render(){
            const html = this.state.html;

            return(
              <div className={styles.container}>
                <div className={styles.container2}>
                    <h1 className={styles.sub1}>Markdown Input</h1>
                    <textarea className={styles.textarea} onChange={this.updateMarkdown}></textarea>
                </div>
                <div className={styles.container3}>
                    <h1 className={styles.sub2}>Markdown Output</h1>
                    <div dangerouslySetInnerHTML={{__html: html}}></div>
                </div>
              </div>

            )
        }

   
}
export default Markdown;