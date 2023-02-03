import React, { Component } from 'react';
import './Faq.scss';
export default class Faq extends Component {
  faqs = [
    {
      question: 'What are the system requirements for Intego antivirus?',
      answer:
        'System requirements for Intego Antivirus:\nOperating system:\nWindows 7 and above. \n\n\nHardware:\n500 MB free drive space\n2 GB RAM \n\n\nInternet Connection - Required\nHigh-speed connection is highly recommended',
    },
    {
      question: 'Is the trial version completley free? What’s the catch?',
      answer:
        'System requirements for Intego Antivirus:\nOperating system:\nWindows 7 and above. \n\n\nHardware:\n500 MB free drive space\n2 GB RAM \n\n\nInternet Connection - Required\nHigh-speed connection is highly recommended',
    },
    {
      question: 'What happen when my trial period is over?',
      answer:
        'System requirements for Intego Antivirus:\nOperating system:\nWindows 7 and above. \n\n\nHardware:\n500 MB free drive space\n2 GB RAM \n\n\nInternet Connection - Required\nHigh-speed connection is highly recommended',
    },
    {
      question: 'In what payment methods can I use to purchase intego antivirus?',
      answer:
        'System requirements for Intego Antivirus:\nOperating system:\nWindows 7 and above. \n\n\nHardware:\n500 MB free drive space\n2 GB RAM \n\n\nInternet Connection - Required\nHigh-speed connection is highly recommended',
    },
    {
      question: "What if i purchase Intego's premium and then regret it?",
      answer:
        'System requirements for Intego Antivirus:\nOperating system:\nWindows 7 and above. \n\n\nHardware:\n500 MB free drive space\n2 GB RAM \n\n\nInternet Connection - Required\nHigh-speed connection is highly recommended',
    },
  ];
  render() {
    return (
      <section className='wrap-faq-section'>
        <div className='container'>
          <div className='wrap-faqs'>
            <div className='wrap-faqs-content'>
              <h2 className='faqs-title'>
                Frequently{'\n'}
                Asked{'\n'}
                Questions
              </h2>
              <p className='faqs-content'>
                Dicta omnes atomorum voluptatum definitionem petentium sit at, vel at quis corrumpit facilisi
                contentiones per.
              </p>
            </div>

            <div className='wrap-faq-items'>
              <div className='warp-faq'>
                {this.faqs.map((faq, i) => {
                  return (
                    <details open={i === 0}>
                      <summary>{faq.question}</summary>
                      <div class='content'>
                        <p>{faq.answer}</p>
                      </div>
                    </details>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
