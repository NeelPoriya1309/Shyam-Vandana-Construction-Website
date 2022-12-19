import { ImageList, ImageListItem } from '@mui/material';
import React from 'react';

const Gallery = () => {
  const itemData = [];
  for (let i = 1; i < 30; ++i) {
    if (i === 1) {
      itemData.push({ title: `${i}`, img: `Saranpur/Saranpur.jpg` });
    } else {
      itemData.push({ title: `${i}`, img: `Saranpur/Saranpur (${i}).jpg` });
    }
  }

  console.log(itemData);

  return (
    <>
      <div
        style={{
          marginTop: '150px',
          fontSize: '150%',
          textAlign: 'center',
          fontWeight: 'bold',
          marginBottom: '20px',
        }}
      >
        Saranpur Hanumanji Mandir
      </div>
      <div
        style={{
          width: '80%',
          marginLeft: '10%',
        }}
      >
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                style={{ borderRadius: '10px' }}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </>
  );
};

export default Gallery;
