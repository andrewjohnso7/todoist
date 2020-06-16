import React from 'react';
import GlobalFonts from './fonts/fonts';
import {
  PrimaryView,
  Category,
  CategoryTwo,
  CategoryThree,
  Title,
} from './styles';

class MainMenu extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <PrimaryView>
        <GlobalFonts />
        <Title>Category Select</Title>
        <Category>To Do Now</Category>
        <CategoryTwo>To Do Tomorrow</CategoryTwo>
        <CategoryThree>Completed</CategoryThree>
      </PrimaryView>
    );
  }
}

export default MainMenu;
