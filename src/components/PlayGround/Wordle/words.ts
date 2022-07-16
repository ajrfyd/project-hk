import { useCallback } from 'react';
import wordBank from './wordle-bank.txt';
import axios from 'axios';

export const boardDefault = [
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', '']
];  

type WordSet = {
  wordSet: Set<string>,
  todaysWord: string;
};

export const generateWordSet = async () => {
  // let wordSet;
  // let todaysWord;

  // await fetch(wordBank).then(res => res.text()).then(res => {
  //   const wordArr = res.split('\n');
  //   todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)];
  //   wordSet = new Set(wordArr);
  // })
  
  const { data } = await axios.get(wordBank);
  const wordSet: Set<string> = new Set(data.split('\n'));
  const todaysWord: string = data.split('\n')[Math.floor(Math.random() * wordSet.size)];
  return { wordSet, todaysWord };
}