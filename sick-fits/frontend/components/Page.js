import PropTypes from 'prop-types';

export default function Page({ children }) {
  return (
    <div>
      <p>I am a page component</p>
      {children}
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
