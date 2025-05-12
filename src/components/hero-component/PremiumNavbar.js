import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button, Fade, IconButton } from "@mui/material";
import React from "react";

class PremiumNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      scrolled: false,
      hoveredItem: null,
    };
    this.handleMenuToggle = this.handleMenuToggle.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleNavHover = this.handleNavHover.bind(this);
    this.handleNavLeave = this.handleNavLeave.bind(this);
    this.onWindowScroll = this.onWindowScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onWindowScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onWindowScroll);
  }

  onWindowScroll() {
    const offset = window.scrollY;
    this.setState({ scrolled: offset > 60 });
  }

  handleMenuToggle() {
    this.setState(prev => ({ menuOpen: !prev.menuOpen }));
  }

  handleScroll(id) {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
      this.setState({ menuOpen: false });
    }
  }

  handleNavHover(id) {
    this.setState({ hoveredItem: id });
  }

  handleNavLeave() {
    this.setState({ hoveredItem: null });
  }

  render() {
    const { active = 'Home' } = this.props;
    const { menuOpen, scrolled, hoveredItem } = this.state;
    const navLinks = [
      { label: 'Problems', id: 'problem-section' },
      { label: 'Solution', id: 'solution-section' },
      { label: 'Process', id: 'process-section' },
      { label: 'Pricing', id: 'pricing-section' },
    ];

    return (
      <Box sx={{
        position: 'fixed',
        top: scrolled ? 4 : 10,
        left: '50%',
        transform: 'translateX(-50%)',
        width: { xs: '93%', sm: '80%', md: '62%', lg: '52%' },
        maxWidth: '1200px',
        zIndex: 2000,
        transition: 'all 0.38s cubic-bezier(0.34, 1.56, 0.64, 1)',
        fontFamily: 'Poppins, Inter, sans-serif',
        pt: { xs: '1.3rem', md: '1.7rem' },
      }}>
        <Box sx={{
          background: 'rgba(255,255,255,0.73)',
          backdropFilter: 'blur(22px) saturate(180%)',
          borderRadius: scrolled ? '2.5rem' : '2.8rem',
          boxShadow: '0 4px 24px 0 rgba(137,79,242,0.09)',
          border: '1.5px solid rgba(200, 180, 255, 0.22)',
          px: { xs: '2.5rem', md: '2.5rem' },
          py: { xs: '0.28rem', md: '0.48rem' },
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          minHeight: '4.2rem',
          gap: 0,
        }}>
          {/* Logo - leftmost */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              height: '51.2px',
              width: { xs: '110px', md: '140px' },
              minWidth: { xs: '110px', md: '140px' },
              maxWidth: { xs: '180px', md: '220px' },
              pr: { xs: '1.5rem', md: '2.5rem' },
              flex: '0 0 auto',
              cursor: 'pointer',
              justifyContent: 'flex-start',
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <Box
              component="img"
              src="/logo.png"
              alt="Kaicension Logo"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                display: 'block',
                mx: 'auto',
                p: '3px',
                boxSizing: 'border-box',
              }}
            />
          </Box>
          {/* Nav items and button - all in one row, no wrapping */}
          <Box sx={{
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            gap: 2.4,
            flex: 1,
            whiteSpace: 'nowrap',
            justifyContent: 'flex-start',
            minWidth: 0,
          }}>
            {navLinks.map(link => (
              <Button
                key={link.id}
                disableRipple
                onMouseEnter={() => this.handleNavHover(link.id)}
                onMouseLeave={this.handleNavLeave}
                sx={{
                  background: '#fff',
                  color: active === link.label ? '#6B3FA0' : '#2D1557',
                  fontWeight: 500,
                  borderRadius: '1.5rem',
                  boxShadow: '0 2px 8px rgba(137,79,242,0.04)',
                  fontSize: '0.95rem',
                  px: 3.8,
                  py: 0.8,
                  fontFamily: 'Poppins, Inter, sans-serif',
                  transition: 'all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  textTransform: 'none',
                  position: 'relative',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  '&:hover': {
                    background: 'rgba(107, 63, 160, 0.08)',
                    boxShadow: '0 2px 8px rgba(107, 63, 160, 0.08)',
                    transform: 'translateY(-2px) scale(1.03)',
                  },
                }}
                onClick={() => this.handleScroll(link.id)}
              >
                {link.label}
              </Button>
            ))}
            <Button
              variant="contained"
              disableElevation
              sx={{
                background: 'linear-gradient(135deg, #7B4FB5 0%, #9A6AD6 100%)',
                color: '#fff',
                fontWeight: 500,
                borderRadius: '1.5rem',
                fontSize: '0.95rem',
                px: 3.8,
                py: 0.8,
                fontFamily: 'Poppins, Inter, sans-serif',
                textTransform: 'none',
                whiteSpace: 'nowrap',
                '&:hover': {
                  boxShadow: '0 2px 12px rgba(107, 63, 160, 0.18)',
                  transform: 'translateY(-2px) scale(1.03)',
                },
              }}
              onClick={() => this.handleScroll('footer-section')}
            >
              Transform Now
            </Button>
          </Box>

          {/* Mobile Nav Toggle */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', ml: 'auto' }}>
            <IconButton
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={this.handleMenuToggle}
              sx={{
                color: '#6B3FA0',
                background: 'rgba(107, 63, 160, 0.05)',
                width: 44,
                height: 44,
                borderRadius: '14px',
                transition: 'all 0.2s ease',
                '&:hover': {
                  background: 'rgba(107, 63, 160, 0.08)',
                  transform: 'scale(1.05)'
                }
              }}
            >
              {menuOpen ? <CloseIcon sx={{ fontSize: 24 }} /> : <MenuIcon sx={{ fontSize: 24 }} />}
            </IconButton>
            {menuOpen && (
              <Fade in={menuOpen}>
                <Box
                  sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    zIndex: 3000,
                    background: 'rgba(0,0,0,0.25)',
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <Box
                    sx={{
                      background: 'rgba(255,255,255,0.97)',
                      backdropFilter: 'blur(22px) saturate(180%)',
                      width: '85vw',
                      maxWidth: '380px',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 2,
                      p: 3.5,
                      boxShadow: '0 2px 16px rgba(107, 63, 160, 0.12)',
                    }}
                  >
                    <IconButton
                      aria-label="Close menu"
                      onClick={this.handleMenuToggle}
                      sx={{ alignSelf: 'flex-end', mb: 1.5, color: '#6B3FA0' }}
                    >
                      <CloseIcon />
                    </IconButton>
                    {navLinks.map((link, index) => (
                      <Button
                        key={link.id}
                        onClick={() => { this.handleScroll(link.id); }}
                        sx={{
                          fontWeight: 600,
                          fontSize: '1.15rem',
                          color: active === link.label ? '#6B3FA0' : '#0D0D0D',
                          borderRadius: '16px',
                          px: 3,
                          py: 1.8,
                          textTransform: 'none',
                          justifyContent: 'flex-start',
                          background: active === link.label ? 'rgba(107, 63, 160, 0.05)' : 'transparent',
                          letterSpacing: '0.02em',
                          fontFamily: 'Inter, sans-serif',
                          position: 'relative',
                          '&:hover': {
                            background: 'rgba(107, 63, 160, 0.05)',
                            color: '#6B3FA0',
                          },
                          '&::after': active === link.label ? {
                            content: '""',
                            position: 'absolute',
                            left: '12px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: '4px',
                            height: '40%',
                            background: 'linear-gradient(180deg, #6B3FA0 0%, #9A6AD6 100%)',
                            borderRadius: '4px',
                          } : {},
                        }}
                      >
                        {link.label}
                      </Button>
                    ))}
                    <Button
                      variant="contained"
                      fullWidth
                      onClick={() => { this.handleScroll('footer-section'); }}
                      sx={{
                        background: 'linear-gradient(135deg, #6B3FA0 0%, #9A6AD6 100%)',
                        color: '#FFFFFF',
                        fontWeight: 600,
                        borderRadius: '16px',
                        px: 3.8,
                        py: 1.5,
                        fontSize: '1.05rem',
                        letterSpacing: '0.02em',
                        boxShadow: '0 4px 16px rgba(107, 63, 160, 0.16), 0 1px 0 rgba(255, 255, 255, 0.1) inset',
                        textTransform: 'none',
                        fontFamily: 'Inter, sans-serif',
                        position: 'relative',
                        overflow: 'hidden',
                        transition: 'all 0.24s ease',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: '-100%',
                          width: '100%',
                          height: '100%',
                          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                          transition: 'left 0.7s ease',
                        },
                        '&:hover': {
                          background: 'linear-gradient(135deg, #7B4FB5 0%, #9A6AD6 100%)',
                          boxShadow: '0 6px 20px rgba(107, 63, 160, 0.2), 0 1px 0 rgba(255, 255, 255, 0.15) inset',
                          '&::before': {
                            left: '100%'
                          }
                        },
                      }}
                    >
                      Transform Now
                    </Button>
                  </Box>
                </Box>
              </Fade>
            )}
          </Box>
        </Box> {/* <- This is the missing closing Box tag */}
      </Box>
    );
  }
}

export default PremiumNavbar;
