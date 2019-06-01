import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function FileName() {
  return (
    <h2 className='filename'>
      <a href='/#'>
        <i class="fileicon fas fa-folder"></i>
        build
      </a>
    </h2>
  );
}

function FileListItem() {
  return (
    <article className='filelist-item'>
      <FileName />
      <p>Close #13784</p>
      <footer class='time'>2 days ago</footer>
    </article>
  );
}

function FileList() {
  return (
    <div className='filelist'>
      <FileListItem />
      <FileListItem />
    </div>
  )
}

ReactDOM.render(<FileList />, document.getElementById('root'));

