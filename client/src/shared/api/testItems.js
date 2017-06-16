import asteroid from '../services/asteroid';

const testItems = asteroid;

testItems.subscribe('testCollection');

testItems.ddp.on('added', (doc) => {
  if (doc.collection === 'testCollection') {
    console.log('added doc: ', doc);
  }
});

testItems.ddp.on('removed', (removedDoc) => {
  if (removedDoc.collection === 'testCollection') {
    console.log('removed doc: ', removedDoc);
  }
});

testItems.ddp.on('changed', (updatedDoc) => {
  if (updatedDoc.collection === 'testCollection') {
    console.log('changed doc: ', updatedDoc);
  }
});

export default testItems;
