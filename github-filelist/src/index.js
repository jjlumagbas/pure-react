import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

function FileIcon({ file }) {
  const icon = file.type === 'folder' ? 'fa-folder' : 'fa-file';
  return (
    <i className={`fileicon fas ${icon}`}></i>
  );
}

function FileName({ file }) {
  return (
    <h2 className='filename'>
      <a href='/#'>
        <FileIcon file={file} />
        {file.name}
      </a>
    </h2>
  );
}


function FileListItem({ file }) {
  return (
    <article className='filelist-item'>
      <FileName file={file} />
      <p>Close #13784</p>
      <footer className='time'>2 days ago</footer>
    </article>
  );
}

FileListItem.propTypes = {
  file: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['file', 'folder']).isRequired
  })
};

function FileList() {
  return (
    <section className='filelist'>
      <FileListItem file={file1} />
      <FileListItem file={file2} />
    </section>
  )
}

const file1 = {
  name: 'source',
  type: 'folder'
}

const file2 = {
  name: 'index.html',
  type: 'file'
}

ReactDOM.render(<FileList />, document.getElementById('root'));

