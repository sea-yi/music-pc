import styled from 'styled-components'

export const ThemeHeaderSongWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 5px;
  border-bottom: 2px solid #c20c0c;

  .left {
    display: flex;
    align-items: flex-end;

    .title {
      font-size: 20px;
    }

    .count {
      margin-bottom: 5px;
      margin-left: 20px;
    }
  }

  .right {
    .count {
      color: #c20c0c;
    }
  }
`
