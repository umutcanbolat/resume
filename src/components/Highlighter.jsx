import React from 'react';
import Highlight from 'react-highlight-words';

import techKeywords from '../static/techKeywords.json';

export default function Highlighter({ text }) {
  return <Highlight searchWords={techKeywords} textToHighlight={text} className="description" />;
}
