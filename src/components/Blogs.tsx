import React  from 'react';
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Page,
  Inject
} from '@syncfusion/ej2-react-grids';
import data from '../data/posts.json';
import '../data/App.css';

const Blogs: React.FC = () => {
  return (
    <div >
      <GridComponent dataSource={data}
        allowPaging={true}
        pageSettings={{ pageSize: 15 }}
      >
        <ColumnsDirective>
          <ColumnDirective field='kanji' headerText='Kanji' width='110' />
          <ColumnDirective field='reading' headerText='Uso de Kanji en Frases' />
        </ColumnsDirective>
        <Inject services={[Page]} />
      </GridComponent>
    </div>
  );
}

export default Blogs;
