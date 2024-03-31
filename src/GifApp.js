import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifApp = () => {

  const [categories, setCategories] = useState([]);

  const onAddCategory = ( newCategory ) => {

    if ( categories.includes(newCategory) ) return;
    setCategories([ newCategory, ...categories ]);
  };

  return (
    <>
      {/* title */}

      <h1>Gif app</h1>
      {/* Input */}
      <AddCategory
        onNewCategory = { onAddCategory }
        // setCategories={ setCategories }
      />
      {/* gif list */}
      <ol>
        { categories.map( category => {
              return <li key={ category }>{ category }</li>
            }
          )
        }        
      </ol>

      {/* gif items */}
    </>
  );
}

