"use client";
import Image from 'next/image'
import styles from './page.module.css'
import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [author,setAuthor] = useState(null);
  const [quote,setQuote] = useState("");

  const handleChange = (e) => {
    let temp = e.target.value;
    setAuthor((temp.toLowerCase()).replaceAll(" ","-"));
  }

  const handleGenerate = (e) =>{
     e.preventDefault();
     if(author === null){
     axios.get('/quotes/random')
     .then((response)=>{ setQuote(response.data[0].content) })
     }
     else{

      axios.get(`/author/${author}`)
      .then((response)=> { setQuote(response.data.quote) })
     }


  }
  return (
    <main className={styles.main}>
    <h2>Quote Generator</h2>
      <div className={styles.description}>
        <div>
          <form>
          <select onChange={handleChange} name='author' className={styles.select}>
            <option></option>
            <option value="A. P. J. Abdul Kalam">Abdul Kalam</option>
            <option value="Abraham Lincoln">Abraham Lincoln</option>
            <option value="Albert Einstein">Albert Einstein</option>
            <option value="Aristotle">Aristotle</option>
            <option value="Benjamin Franklin">Benjamin Franklin</option>
            <option value="Bruce Lee">Bruce Lee</option>
            <option value="Confucius">Confucius</option>
            <option value="Dalai Lama">Dalai Lama</option>
            <option value="Epictetus">Epictetus</option>
            <option value="Jawaharlal Nehru">Jawaharlal Nehru</option>
            <option value="Laozi">Laozi</option>
            <option value="Mahatma Gandhi">Mahatma Gandhi</option>
            <option value="Napoleon">Napoleon</option>
            <option value="Socrates">Socrates</option>
            <option value="Swami Vivekananda">Swami Vivekananda</option>
            <option value="The Buddha">The Buddha</option>
            <option value="Thomas Edison">Thomas Edison</option>
            <option value="William Wordsworth">William Wordsworth</option>
            <option value="William Shakespeare">William Shakespeare</option>
            <option value="Winston Churchill">Winston Churchill</option>
          </select>
          <button onClick={handleGenerate} className={styles.btn}>Generate</button>
          </form>
        </div>
        <div>
          <p>{quote}</p>
        </div>
      </div>
    </main>
  )
}
