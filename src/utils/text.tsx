import React from 'react';

export function makeStartCase(text: string) {
  return text.substr(0, 1).toUpperCase() + text.substr(1).toLowerCase();
}

export function highlightText(text: string, query: string) {
  const parts = text.split(new RegExp(`(${query})`, 'gi'));

  return (
    <>
      {parts.map((part, index) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <mark key={index}>{part}</mark>
        ) : (
          <span key={index}>{part}</span>
        ),
      )}
    </>
  );
}
