import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Time from './time';
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
      <Time time={file.lastUpdated} />
    </li>
  );
}

FileListItem.propTypes = {
  file: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['file', 'folder']).isRequired,
    commit: PropTypes.shape({
      message: PropTypes.string.isRequired
    }),
    lastUpdated: PropTypes.string.isRequired
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

const files = [
  {
    name: 'source',
    type: 'folder',
    commit: {
      message: 'Close #1689, Replace es3ify with Babel ES3 transforms (#1688)'
    },
    lastUpdated: '2018-02-01 05:04:31'
  },
  {
    name: 'index.html',
    type: 'file',
    commit: {
      message: 'Update doc to use test with Enzyme (#1692)'
    },
    lastUpdated: '2019-01-19 20:15:42'
  },
  {
    name: 'index.css',
    type: 'file',
    commit: {
      message: 'Update doc to use test with Enzyme (#1692)'
    },
    lastUpdated: '2019-05-30 22:25:58'
  }
];

ReactDOM.render(<FileList files={files} />, document.getElementById('root'));

