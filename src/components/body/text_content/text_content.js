import React from 'react';
import './text_content.css';
import TextContent from './text_contents.json'

export default function renderer(props) {
  const page_text_content = [];
  for( var page_index = 0; page_index < TextContent.length; page_index++){
    if(TextContent[page_index].page === props.page) {
      for(var content_index=0; content_index < TextContent[page_index].text_content.length; content_index++){
        page_text_content.push(
          <p class="text_content">{TextContent[page_index].text_content[content_index]}</p>
        );
      }
    }
  }
  return (
    page_text_content
  );
}
