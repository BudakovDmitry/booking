import * as Styled from 'src/components/Loader/styles';
import { Triangle } from 'react-loader-spinner';

type LoaderProps = {
  width: string;
  height: string;
};

const Loader = ({ width = '200', height = '200' }: LoaderProps): JSX.Element => (
  <Styled.LoaderContainer>
    <Triangle
      height={height}
      width={width}
      color="#eb8a44"
      ariaLabel="triangle-loading"
      wrapperStyle={{}}
      visible
    />
  </Styled.LoaderContainer>
);

export default Loader;
