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

function CommitMessage({ commit }) {
  return (
    <p>{commit.message}</p>
  );
}


function FileListItem({ file }) {
  return (
    <li className='filelist-item'>
      <FileName file={file} />
      <CommitMessage commit={file.commit} />
      <p className='time'>2 days ago</p>
    </li>
  );
}

FileListItem.propTypes = {
  file: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['file', 'folder']).isRequired,
    commit: PropTypes.shape({
      message: PropTypes.string.isRequired
    })
  })
};

function FileList({ files }) {
  const listItems = files.map(file =>
    <FileListItem key={file.name} file={file} />
  );

  return (
    <ul className='filelist'>
      {listItems}
    </ul>
  )
}

FileList.propTypes = {
  files: PropTypes.arrayOf(PropTypes.object).isRequired
}

const file1 = {
  name: 'source',
  type: 'folder',
  commit: {
    message: 'Close #1689, Replace es3ify with Babel ES3 transforms (#1688)'
  }
}

const file2 = {
  name: 'index.html',
  type: 'file',
  commit: {
    message: 'Update doc to use test with Enzyme (#1692)'
  }
}

const files = [file1, file2];

ReactDOM.render(<FileList files={files} />, document.getElementById('root'));

