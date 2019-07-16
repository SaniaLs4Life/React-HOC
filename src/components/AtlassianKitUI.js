import React, { useState, useEffect } from 'react';
import { AsyncSelect } from '@atlaskit/select';

const AsyncExample = () => {
  const fetchData = () => {
    fetch('http://www.json-generator.com/api/json/get/cgnqtCXdIO?indent=2')
      .then(res => res.json())
      .then(res => {
        const newList = res.map(e => { return { label: e.company, value: e.company } })
        setList(newList);
      })
  }

  useEffect(() => {
    fetchData();
  }, [])

  // you control how the options are filtered
  const filter = (inputValue) =>
    list && list.filter(i => i.label.toLowerCase().includes(inputValue.toLowerCase()));

  // async load function using callback (promises also supported)
  const loadOptions = (inputValue, callback) => {
    setTimeout(() => {
      callback(filter(inputValue));
    }, 1000);
  };
  const [list, setList] = useState(null);
  return (
    <AsyncSelect
      className="async-select-with-callback"
      classNamePrefix="react-select"
      defaultOptions={list}
      loadOptions={loadOptions}
      options={list}
      placeholder="Choose a City"
    />
  )
}

export default AsyncExample;