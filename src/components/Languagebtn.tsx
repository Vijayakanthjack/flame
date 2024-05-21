import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { MenuProps } from '@mui/material/Menu';
import { useTranslation } from 'react-i18next';
import us from '/us.png';
import sp from '/sp.png';
import fr from '/fr.png';
import gr from '/gr.png';
import ru from '/ru.png';
import ch from '/ch.png';

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 100,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

const Languagebtn = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState('EN');

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language.toLowerCase());
    handleClose();
  };

  const languages = [
    { name: 'EN', flag: us },
    { name: 'SP', flag: sp },
    { name: 'FR', flag: fr },
    { name: 'GR', flag: gr },
    { name: 'RU', flag: ru },
    { name: 'CH', flag: ch },
  ];

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          backgroundColor: 'white',
          color: 'black',
          borderRadius: '50px',
          fontSize: "16px",
          '&:hover': {
            backgroundColor: 'white',
          },
        }}
      >
        <img
          src={languages.find(lang => lang.name === selectedLanguage)?.flag}
          alt={`${selectedLanguage} flag`}
          style={{ width: '20px', marginRight: '8px' }}
        />
        {selectedLanguage}
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {languages.map((language) => (
          <MenuItem
            key={language.name}
            onClick={() => handleLanguageChange(language.name)}
            disableRipple
          >
            <img
              src={language.flag}
              alt={`${language.name} flag`}
              style={{ width: '20px', marginRight: '8px' }}
            />
            {language.name}
          </MenuItem>
        ))}
      </StyledMenu>
    </div>
  );
};

export default Languagebtn;
