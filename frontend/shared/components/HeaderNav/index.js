import Emoji from '../Emoji';

// Custom styles
import { StyledSpace, Logo } from './Styles'



// Main functional component
export const HeaderNav = () => {
  return (
    <div>
      <StyledSpace>
        <a href='/'><Logo><Emoji symbol='✈️' /> CompareKaro</Logo></a>
      </StyledSpace>
    </div>
  )
}