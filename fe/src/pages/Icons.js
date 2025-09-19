import { Wrap } from "@chakra-ui/react";
import {
    Fa500Px,
    FaAccessibleIcon,
    FaAccusoft,
    FaAcquisitionsIncorporated,
    FaAd,
    FaAddressBook,
    FaAddressCard,
    FaAdjust,
    FaAdn,
    FaAdversal,
    FaAffiliatetheme,
    FaAirFreshener,
    FaAirbnb,
    FaAlgolia,
    FaAlignCenter,
    FaAlignJustify,
    FaAlignLeft,
    FaAlignRight,
    FaAlipay,
    FaAllergies,
    FaAmazon,
    FaAmazonPay,
    FaAmbulance,
    FaAmericanSignLanguageInterpreting,
    FaAmilia,
    FaAnchor,
    FaAndroid,
    FaAngellist,
    FaAngleDoubleDown,
    FaAngleDoubleLeft,
    FaAngleDoubleRight,
    FaAngleDoubleUp,
    FaAngleDown,
    FaAngleLeft,
    FaAngleRight,
    FaAngleUp,
    FaAngry,
    FaAngrycreative,
    FaAngular,
    FaAnkh,
    FaAppStore,
    FaAppStoreIos,
    FaApper,
    FaApple,
    FaAppleAlt,
    FaApplePay,
    FaArchive,
    FaArchway,
    FaArrowAltCircleDown,
    FaArrowAltCircleLeft,
    FaArrowAltCircleRight,
    FaArrowAltCircleUp,
    FaArrowCircleDown,
    FaArrowCircleLeft,
    FaArrowCircleRight,
    FaArrowCircleUp,
    FaArrowDown,
    FaArrowLeft,
    FaArrowRight,
    FaArrowUp,
    FaArrowsAlt,
    FaArrowsAltH,
    FaArrowsAltV,
    FaArtstation,
    FaAssistiveListeningSystems,
    FaAsterisk,
    FaAsymmetrik,
    FaAt,
    FaAtlas,
    FaAtlassian,
    FaAtom,
    FaAudible,
    FaAudioDescription,
    FaAutoprefixer,
    FaAvianex,
    FaAviato,
    FaAward,
    FaAws,
    FaBaby,
    FaBabyCarriage,
    FaBackspace,
    FaBackward,
    FaBacon,
    FaBacteria,
    FaBacterium,
    FaBahai,
    FaBalanceScale,
    FaBalanceScaleLeft,
    FaBalanceScaleRight,
    FaBan,
    FaBandAid,
    FaBandcamp,
    FaBarcode,
    FaBars,
    FaBaseballBall,
    FaBasketballBall,
    FaBath,
    FaBatteryEmpty,
    FaBatteryFull,
    FaBatteryHalf,
    FaBatteryQuarter,
    FaBatteryThreeQuarters,
    FaBattleNet,
    FaBed,
    FaBeer,
    FaBehance,
    FaBehanceSquare,
    FaBell,
    FaBellSlash,
    FaBezierCurve,
    FaBible,
    FaBicycle,
    FaBiking,
    FaBimobject,
    FaBinoculars,
    FaBiohazard,
    FaBirthdayCake,
    FaBitbucket,
    FaBitcoin,
    FaBity,
    FaBlackTie,
    FaBlackberry,
    FaBlender,
    FaBlenderPhone,
    FaBlind,
    FaBlog,
    FaBlogger,
    FaBloggerB,
    FaBluetooth,
    FaBluetoothB,
    FaBold,
    FaBolt,
    FaBomb,
    FaBone,
    FaBong,
    FaBook,
    FaBookDead,
    FaBookMedical,
    FaBookOpen,
    FaBookReader,
    FaBookmark,
    FaBootstrap,
    FaBorderAll,
    FaBorderNone,
    FaBorderStyle,
    FaBowlingBall,
    FaBox,
    FaBoxOpen,
    FaBoxTissue,
    FaBoxes,
    FaBraille,
    FaBrain,
    FaBreadSlice,
    FaBriefcase,
    FaBriefcaseMedical,
    FaBroadcastTower,
    FaBroom,
    FaBrush,
    FaBtc,
    FaBuffer,
    FaBug,
    FaBuilding,
    FaBullhorn,
    FaBullseye,
    FaBurn,
    FaBuromobelexperte,
    FaBus,
    FaBusAlt,
    FaBusinessTime,
    FaBuyNLarge,
    FaBuysellads,
    FaCalculator,
    FaCalendar,
    FaCalendarAlt,
    FaCalendarCheck,
    FaCalendarDay,
    FaCalendarMinus,
    FaCalendarPlus,
    FaCalendarTimes,
    FaCalendarWeek,
    FaCamera,
    FaCameraRetro,
    FaCampground,
    FaCanadianMapleLeaf,
    FaCandyCane,
    FaCannabis,
    FaCapsules,
    FaCar,
    FaCarAlt,
    FaCarBattery,
    FaCarCrash,
    FaCarSide,
    FaCaravan,
    FaCaretDown,
    FaCaretLeft,
    FaCaretRight,
    FaCaretSquareDown,
    FaCaretSquareLeft,
    FaCaretSquareRight,
    FaCaretSquareUp,
    FaCaretUp,
    FaCarrot,
    FaCartArrowDown,
    FaCartPlus,
    FaCashRegister,
    FaCat,
    FaCcAmazonPay,
    FaCcAmex,
    FaCcApplePay,
    FaCcDinersClub,
    FaCcDiscover,
    FaCcJcb,
    FaCcMastercard,
    FaCcPaypal,
    FaCcStripe,
    FaCcVisa,
    FaCentercode,
    FaCentos,
    FaCertificate,
    FaChair,
    FaChalkboard,
    FaChalkboardTeacher,
    FaChargingStation,
    FaChartArea,
    FaChartBar,
    FaChartLine,
    FaChartPie,
    FaCheck,
    FaCheckCircle,
    FaCheckDouble,
    FaCheckSquare,
    FaCheese,
    FaChess,
    FaChessBishop,
    FaChessBoard,
    FaChessKing,
    FaChessKnight,
    FaChessPawn,
    FaChessQueen,
    FaChessRook,
    FaChevronCircleDown,
    FaChevronCircleLeft,
    FaChevronCircleRight,
    FaChevronCircleUp,
    FaChevronDown,
    FaChevronLeft,
    FaChevronRight,
    FaChevronUp,
    FaChild,
    FaChrome,
    FaChromecast,
    FaChurch,
    FaCircle,
    FaCircleNotch,
    FaCity,
    FaClinicMedical,
    FaClipboard,
    FaClipboardCheck,
    FaClipboardList,
    FaClock,
    FaClone,
    FaClosedCaptioning,
    FaCloud,
    FaCloudDownloadAlt,
    FaCloudMeatball,
    FaCloudMoon,
    FaCloudMoonRain,
    FaCloudRain,
    FaCloudShowersHeavy,
    FaCloudSun,
    FaCloudSunRain,
    FaCloudUploadAlt,
    FaCloudflare,
    FaCloudscale,
    FaCloudsmith,
    FaCloudversify,
    FaCocktail,
    FaCode,
    FaCodeBranch,
    FaCodepen,
    FaCodiepie,
    FaCoffee,
    FaCog,
    FaCogs,
    FaCoins,
    FaColumns,
    FaComment,
    FaCommentAlt,
    FaCommentDollar,
    FaCommentDots,
    FaCommentMedical,
    FaCommentSlash,
    FaComments,
    FaCommentsDollar,
    FaCompactDisc,
    FaCompass,
    FaCompress,
    FaCompressAlt,
    FaCompressArrowsAlt,
    FaConciergeBell,
    FaConfluence,
    FaConnectdevelop,
    FaContao,
    FaCookie,
    FaCookieBite,
    FaCopy,
    FaCopyright,
    FaCottonBureau,
    FaCouch,
    FaCpanel,
    FaCreativeCommons,
    FaCreativeCommonsBy,
    FaCreativeCommonsNc,
    FaCreativeCommonsNcEu,
    FaCreativeCommonsNcJp,
    FaCreativeCommonsNd,
    FaCreativeCommonsPd,
    FaCreativeCommonsPdAlt,
    FaCreativeCommonsRemix,
    FaCreativeCommonsSa,
    FaCreativeCommonsSampling,
    FaCreativeCommonsSamplingPlus,
    FaCreativeCommonsShare,
    FaCreativeCommonsZero,
    FaCreditCard,
    FaCriticalRole,
    FaCrop,
    FaCropAlt,
    FaCross,
    FaCrosshairs,
    FaCrow,
    FaCrown,
    FaCrutch,
    FaCss3,
    FaCss3Alt,
    FaCube,
    FaCubes,
    FaCut,
    FaCuttlefish,
    FaDAndD,
    FaDAndDBeyond,
    FaDailymotion,
    FaDashcube,
    FaDatabase,
    FaDeaf,
    FaDeezer,
    FaDelicious,
    FaDemocrat,
    FaDeploydog,
    FaDeskpro,
    FaDesktop,
    FaDev,
    FaDeviantart,
    FaDharmachakra,
    FaDhl,
    FaDiagnoses,
    FaDiaspora,
    FaDice,
    FaDiceD20,
    FaDiceD6,
    FaDiceFive,
    FaDiceFour,
    FaDiceOne,
    FaDiceSix,
    FaDiceThree,
    FaDiceTwo,
    FaDigg,
    FaDigitalOcean,
    FaDigitalTachograph,
    FaDirections,
    FaDiscord,
    FaDiscourse,
    FaDisease,
    FaDivide,
    FaDizzy,
    FaDna,
    FaDochub,
    FaDocker,
    FaDog,
    FaDollarSign,
    FaDolly,
    FaDollyFlatbed,
    FaDonate,
    FaDoorClosed,
    FaDoorOpen,
    FaDotCircle,
    FaDove,
    FaDownload,
    FaDraft2Digital,
    FaDraftingCompass,
    FaDragon,
    FaDrawPolygon,
    FaDribbble,
    FaDribbbleSquare,
    FaDropbox,
    FaDrum,
    FaDrumSteelpan,
    FaDrumstickBite,
    FaDrupal,
    FaDumbbell,
    FaDumpster,
    FaDumpsterFire,
    FaDungeon,
    FaDyalog,
    FaEarlybirds,
    FaEbay,
    FaEdge,
    FaEdgeLegacy,
    FaEdit,
    FaEgg,
    FaEject,
    FaElementor,
    FaEllipsisH,
    FaEllipsisV,
    FaEllo,
    FaEmber,
    FaEmpire,
    FaEnvelope,
    FaEnvelopeOpen,
    FaEnvelopeOpenText,
    FaEnvelopeSquare,
    FaEnvira,
    FaEquals,
    FaEraser,
    FaErlang,
    FaEthereum,
    FaEthernet,
    FaEtsy,
    FaEuroSign,
    FaEvernote,
    FaExchangeAlt,
    FaExclamation,
    FaExclamationCircle,
    FaExclamationTriangle,
    FaExpand,
    FaExpandAlt,
    FaExpandArrowsAlt,
    FaExpeditedssl,
    FaExternalLinkAlt,
    FaExternalLinkSquareAlt,
    FaEye,
    FaEyeDropper,
    FaEyeSlash,
    FaFacebook,
    FaFacebookF,
    FaFacebookMessenger,
    FaFacebookSquare,
    FaFan,
    FaFantasyFlightGames,
    FaFastBackward,
    FaFastForward,
    FaFaucet,
    FaFax,
    FaFeather,
    FaFeatherAlt,
    FaFedex,
    FaFedora,
    FaFemale,
    FaFighterJet,
    FaFigma,
    FaFile,
    FaFileAlt,
    FaFileArchive,
    FaFileAudio,
    FaFileCode,
    FaFileContract,
    FaFileCsv,
    FaFileDownload,
    FaFileExcel,
    FaFileExport,
    FaFileImage,
    FaFileImport,
    FaFileInvoice,
    FaFileInvoiceDollar,
    FaFileMedical,
    FaFileMedicalAlt,
    FaFilePdf,
    FaFilePowerpoint,
    FaFilePrescription,
    FaFileSignature,
    FaFileUpload,
    FaFileVideo,
    FaFileWord,
    FaFill,
    FaFillDrip,
    FaFilm,
    FaFilter,
    FaFingerprint,
    FaFire,
    FaFireAlt,
    FaFireExtinguisher,
    FaFirefox,
    FaFirefoxBrowser,
    FaFirstAid,
    FaFirstOrder,
    FaFirstOrderAlt,
    FaFirstdraft,
    FaFish,
    FaFistRaised,
    FaFlag,
    FaFlagCheckered,
    FaFlagUsa,
    FaFlask,
    FaFlickr,
    FaFlipboard,
    FaFlushed,
    FaFly,
    FaFolder,
    FaFolderMinus,
    FaFolderOpen,
    FaFolderPlus,
    FaFont,
    FaFontAwesome,
    FaFontAwesomeAlt,
    FaFontAwesomeFlag,
    FaFontAwesomeLogoFull,
    FaFonticons,
    FaFonticonsFi,
    FaFootballBall,
    FaFortAwesome,
    FaFortAwesomeAlt,
    FaForumbee,
    FaForward,
    FaFoursquare,
    FaFreeCodeCamp,
    FaFreebsd,
    FaFrog,
    FaFrown,
    FaFrownOpen,
    FaFulcrum,
    FaFunnelDollar,
    FaFutbol,
    FaGalacticRepublic,
    FaGalacticSenate,
    FaGamepad,
    FaGasPump,
    FaGavel,
    FaGem,
    FaGenderless,
    FaGetPocket,
    FaGg,
    FaGgCircle,
    FaGhost,
    FaGift,
    FaGifts,
    FaGit,
    FaGitAlt,
    FaGitSquare,
    FaGithub,
    FaGithubAlt,
    FaGithubSquare,
    FaGitkraken,
    FaGitlab,
    FaGitter,
    FaGlassCheers,
    FaGlassMartini,
    FaGlassMartiniAlt,
    FaGlassWhiskey,
    FaGlasses,
    FaGlide,
    FaGlideG,
    FaGlobe,
    FaGlobeAfrica,
    FaGlobeAmericas,
    FaGlobeAsia,
    FaGlobeEurope,
    FaGofore,
    FaGolfBall,
    FaGoodreads,
    FaGoodreadsG,
    FaGoogle,
    FaGoogleDrive,
    FaGooglePay,
    FaGooglePlay,
    FaGooglePlus,
    FaGooglePlusG,
    FaGooglePlusSquare,
    FaGoogleWallet,
    FaGopuram,
    FaGraduationCap,
    FaGratipay,
    FaGrav,
    FaGreaterThan,
    FaGreaterThanEqual,
    FaGrimace,
    FaGrin,
    FaGrinAlt,
    FaGrinBeam,
    FaGrinBeamSweat,
    FaGrinHearts,
    FaGrinSquint,
    FaGrinSquintTears,
    FaGrinStars,
    FaGrinTears,
    FaGrinTongue,
    FaGrinTongueSquint,
    FaGrinTongueWink,
    FaGrinWink,
    FaGripHorizontal,
    FaGripLines,
    FaGripLinesVertical,
    FaGripVertical,
    FaGripfire,
    FaGrunt,
    FaGuilded,
    FaGuitar,
    FaGulp,
    FaHSquare,
    FaHackerNews,
    FaHackerNewsSquare,
    FaHackerrank,
    FaHamburger,
    FaHammer,
    FaHamsa,
    FaHandHolding,
    FaHandHoldingHeart,
    FaHandHoldingMedical,
    FaHandHoldingUsd,
    FaHandHoldingWater,
    FaHandLizard,
    FaHandMiddleFinger,
    FaHandPaper,
    FaHandPeace,
    FaHandPointDown,
    FaHandPointLeft,
    FaHandPointRight,
    FaHandPointUp,
    FaHandPointer,
    FaHandRock,
    FaHandScissors,
    FaHandSparkles,
    FaHandSpock,
    FaHands,
    FaHandsHelping,
    FaHandsWash,
    FaHandshake,
    FaHandshakeAltSlash,
    FaHandshakeSlash,
    FaHanukiah,
    FaHardHat,
    FaHashtag,
    FaHatCowboy,
    FaHatCowboySide,
    FaHatWizard,
    FaHdd,
    FaHeadSideCough,
    FaHeadSideCoughSlash,
    FaHeadSideMask,
    FaHeadSideVirus,
    FaHeading,
    FaHeadphones,
    FaHeadphonesAlt,
    FaHeadset,
    FaHeart,
    FaHeartBroken,
    FaHeartbeat,
    FaHelicopter,
    FaHighlighter,
    FaHiking,
    FaHippo,
    FaHips,
    FaHireAHelper,
    FaHistory,
    FaHive,
    FaHockeyPuck,
    FaHollyBerry,
    FaHome,
    FaHooli,
    FaHornbill,
    FaHorse,
    FaHorseHead,
    FaHospital,
    FaHospitalAlt,
    FaHospitalSymbol,
    FaHospitalUser,
    FaHotTub,
    FaHotdog,
    FaHotel,
    FaHotjar,
    FaHourglass,
    FaHourglassEnd,
    FaHourglassHalf,
    FaHourglassStart,
    FaHouseDamage,
    FaHouseUser,
    FaHouzz,
    FaHryvnia,
    FaHtml5,
    FaHubspot,
    FaICursor,
    FaIceCream,
    FaIcicles,
    FaIcons,
    FaIdBadge,
    FaIdCard,
    FaIdCardAlt,
    FaIdeal,
    FaIgloo,
    FaImage,
    FaImages,
    FaImdb,
    FaInbox,
    FaIndent,
    FaIndustry,
    FaInfinity,
    FaInfo,
    FaInfoCircle,
    FaInnosoft,
    FaInstagram,
    FaInstagramSquare,
    FaInstalod,
    FaIntercom,
    FaInternetExplorer,
    FaInvision,
    FaIoxhost,
    FaItalic,
    FaItchIo,
    FaItunes,
    FaItunesNote,
    FaJava,
    FaJedi,
    FaJediOrder,
    FaJenkins,
    FaJira,
    FaJoget,
    FaJoint,
    FaJoomla,
    FaJournalWhills,
    FaJs,
    FaJsSquare,
    FaJsfiddle,
    FaKaaba,
    FaKaggle,
    FaKey,
    FaKeybase,
    FaKeyboard,
    FaKeycdn,
    FaKhanda,
    FaKickstarter,
    FaKickstarterK,
    FaKiss,
    FaKissBeam,
    FaKissWinkHeart,
    FaKiwiBird,
    FaKorvue,
    FaLandmark,
    FaLanguage,
    FaLaptop,
    FaLaptopCode,
    FaLaptopHouse,
    FaLaptopMedical,
    FaLaravel,
    FaLastfm,
    FaLastfmSquare,
    FaLaugh,
    FaLaughBeam,
    FaLaughSquint,
    FaLaughWink,
    FaLayerGroup,
    FaLeaf,
    FaLeanpub,
    FaLemon,
    FaLess,
    FaLessThan,
    FaLessThanEqual,
    FaLevelDownAlt,
    FaLevelUpAlt,
    FaLifeRing,
    FaLightbulb,
    FaLine,
    FaLink,
    FaLinkedin,
    FaLinkedinIn,
    FaLinode,
    FaLinux,
    FaLiraSign,
    FaList,
    FaListAlt,
    FaListOl,
    FaListUl,
    FaLocationArrow,
    FaLock,
    FaLockOpen,
    FaLongArrowAltDown,
    FaLongArrowAltLeft,
    FaLongArrowAltRight,
    FaLongArrowAltUp,
    FaLowVision,
    FaLuggageCart,
    FaLungs,
    FaLungsVirus,
    FaLyft,
    FaMagento,
    FaMagic,
    FaMagnet,
    FaMailBulk,
    FaMailchimp,
    FaMale,
    FaMandalorian,
    FaMap,
    FaMapMarked,
    FaMapMarkedAlt,
    FaMapMarker,
    FaMapMarkerAlt,
    FaMapPin,
    FaMapSigns,
    FaMarkdown,
    FaMarker,
    FaMars,
    FaMarsDouble,
    FaMarsStroke,
    FaMarsStrokeH,
    FaMarsStrokeV,
    FaMask,
    FaMastodon,
    FaMaxcdn,
    FaMdb,
    FaMedal,
    FaMedapps,
    FaMedium,
    FaMediumM,
    FaMedkit,
    FaMedrt,
    FaMeetup,
    FaMegaport,
    FaMeh,
    FaMehBlank,
    FaMehRollingEyes,
    FaMemory,
    FaMendeley,
    FaMenorah,
    FaMercury,
    FaMeteor,
    FaMicroblog,
    FaMicrochip,
    FaMicrophone,
    FaMicrophoneAlt,
    FaMicrophoneAltSlash,
    FaMicrophoneSlash,
    FaMicroscope,
    FaMicrosoft,
    FaMinus,
    FaMinusCircle,
    FaMinusSquare,
    FaMitten,
    FaMix,
    FaMixcloud,
    FaMixer,
    FaMizuni,
    FaMobile,
    FaMobileAlt,
    FaModx,
    FaMonero,
    FaMoneyBill,
    FaMoneyBillAlt,
    FaMoneyBillWave,
    FaMoneyBillWaveAlt,
    FaMoneyCheck,
    FaMoneyCheckAlt,
    FaMonument,
    FaMoon,
    FaMortarPestle,
    FaMosque,
    FaMotorcycle,
    FaMountain,
    FaMouse,
    FaMousePointer,
    FaMugHot,
    FaMusic,
    FaNapster,
    FaNeos,
    FaNetworkWired,
    FaNeuter,
    FaNewspaper,
    FaNimblr,
    FaNode,
    FaNodeJs,
    FaNotEqual,
    FaNotesMedical,
    FaNpm,
    FaNs8,
    FaNutritionix,
    FaObjectGroup,
    FaObjectUngroup,
    FaOctopusDeploy,
    FaOdnoklassniki,
    FaOdnoklassnikiSquare,
    FaOilCan,
    FaOldRepublic,
    FaOm,
    FaOpencart,
    FaOpenid,
    FaOpera,
    FaOptinMonster,
    FaOrcid,
    FaOsi,
    FaOtter,
    FaOutdent,
    FaPage4,
    FaPagelines,
    FaPager,
    FaPaintBrush,
    FaPaintRoller,
    FaPalette,
    FaPalfed,
    FaPallet,
    FaPaperPlane,
    FaPaperclip,
    FaParachuteBox,
    FaParagraph,
    FaParking,
    FaPassport,
    FaPastafarianism,
    FaPaste,
    FaPatreon,
    FaPause,
    FaPauseCircle,
    FaPaw,
    FaPaypal,
    FaPeace,
    FaPen,
    FaPenAlt,
    FaPenFancy,
    FaPenNib,
    FaPenSquare,
    FaPencilAlt,
    FaPencilRuler,
    FaPennyArcade,
    FaPeopleArrows,
    FaPeopleCarry,
    FaPepperHot,
    FaPerbyte,
    FaPercent,
    FaPercentage,
    FaPeriscope,
    FaPersonBooth,
    FaPhabricator,
    FaPhoenixFramework,
    FaPhoenixSquadron,
    FaPhone,
    FaPhoneAlt,
    FaPhoneSlash,
    FaPhoneSquare,
    FaPhoneSquareAlt,
    FaPhoneVolume,
    FaPhotoVideo,
    FaPhp,
    FaPiedPiper,
    FaPiedPiperAlt,
    FaPiedPiperHat,
    FaPiedPiperPp,
    FaPiedPiperSquare,
    FaPiggyBank,
    FaPills,
    FaPinterest,
    FaPinterestP,
    FaPinterestSquare,
    FaPizzaSlice,
    FaPlaceOfWorship,
    FaPlane,
    FaPlaneArrival,
    FaPlaneDeparture,
    FaPlaneSlash,
    FaPlay,
    FaPlayCircle,
    FaPlaystation,
    FaPlug,
    FaPlus,
    FaPlusCircle,
    FaPlusSquare,
    FaPodcast,
    FaPoll,
    FaPollH,
    FaPoo,
    FaPooStorm,
    FaPoop,
    FaPortrait,
    FaPoundSign,
    FaPowerOff,
    FaPray,
    FaPrayingHands,
    FaPrescription,
    FaPrescriptionBottle,
    FaPrescriptionBottleAlt,
    FaPrint,
    FaProcedures,
    FaProductHunt,
    FaProjectDiagram,
    FaPumpMedical,
    FaPumpSoap,
    FaPushed,
    FaPuzzlePiece,
    FaPython,
    FaQq,
    FaQrcode,
    FaQuestion,
    FaQuestionCircle,
    FaQuidditch,
    FaQuinscape,
    FaQuora,
    FaQuoteLeft,
    FaQuoteRight,
    FaQuran,
    FaRProject,
    FaRadiation,
    FaRadiationAlt,
    FaRainbow,
    FaRandom,
    FaRaspberryPi,
    FaRavelry,
    FaReact,
    FaReacteurope,
    FaReadme,
    FaRebel,
    FaReceipt,
    FaRecordVinyl,
    FaRecycle,
    FaRedRiver,
    FaReddit,
    FaRedditAlien,
    FaRedditSquare,
    FaRedhat,
    FaRedo,
    FaRedoAlt,
    FaRegAddressBook,
    FaRegAddressCard,
    FaRegAngry,
    FaRegArrowAltCircleDown,
    FaRegArrowAltCircleLeft,
    FaRegArrowAltCircleRight,
    FaRegArrowAltCircleUp,
    FaRegBell,
    FaRegBellSlash,
    FaRegBookmark,
    FaRegBuilding,
    FaRegCalendar,
    FaRegCalendarAlt,
    FaRegCalendarCheck,
    FaRegCalendarMinus,
    FaRegCalendarPlus,
    FaRegCalendarTimes,
    FaRegCaretSquareDown,
    FaRegCaretSquareLeft,
    FaRegCaretSquareRight,
    FaRegCaretSquareUp,
    FaRegChartBar,
    FaRegCheckCircle,
    FaRegCheckSquare,
    FaRegCircle,
    FaRegClipboard,
    FaRegClock,
    FaRegClone,
    FaRegClosedCaptioning,
    FaRegComment,
    FaRegCommentAlt,
    FaRegCommentDots,
    FaRegComments,
    FaRegCompass,
    FaRegCopy,
    FaRegCopyright,
    FaRegCreditCard,
    FaRegDizzy,
    FaRegDotCircle,
    FaRegEdit,
    FaRegEnvelope,
    FaRegEnvelopeOpen,
    FaRegEye,
    FaRegEyeSlash,
    FaRegFile,
    FaRegFileAlt,
    FaRegFileArchive,
    FaRegFileAudio,
    FaRegFileCode,
    FaRegFileExcel,
    FaRegFileImage,
    FaRegFilePdf,
    FaRegFilePowerpoint,
    FaRegFileVideo,
    FaRegFileWord,
    FaRegFlag,
    FaRegFlushed,
    FaRegFolder,
    FaRegFolderOpen,
    FaRegFontAwesomeLogoFull,
    FaRegFrown,
    FaRegFrownOpen,
    FaRegFutbol,
    FaRegGem,
    FaRegGrimace,
    FaRegGrin,
    FaRegGrinAlt,
    FaRegGrinBeam,
    FaRegGrinBeamSweat,
    FaRegGrinHearts,
    FaRegGrinSquint,
    FaRegGrinSquintTears,
    FaRegGrinStars,
    FaRegGrinTears,
    FaRegGrinTongue,
    FaRegGrinTongueSquint,
    FaRegGrinTongueWink,
    FaRegGrinWink,
    FaRegHandLizard,
    FaRegHandPaper,
    FaRegHandPeace,
    FaRegHandPointDown,
    FaRegHandPointLeft,
    FaRegHandPointRight,
    FaRegHandPointUp,
    FaRegHandPointer,
    FaRegHandRock,
    FaRegHandScissors,
    FaRegHandSpock,
    FaRegHandshake,
    FaRegHdd,
    FaRegHeart,
    FaRegHospital,
    FaRegHourglass,
    FaRegIdBadge,
    FaRegIdCard,
    FaRegImage,
    FaRegImages,
    FaRegKeyboard,
    FaRegKiss,
    FaRegKissBeam,
    FaRegKissWinkHeart,
    FaRegLaugh,
    FaRegLaughBeam,
    FaRegLaughSquint,
    FaRegLaughWink,
    FaRegLemon,
    FaRegLifeRing,
    FaRegLightbulb,
    FaRegListAlt,
    FaRegMap,
    FaRegMeh,
    FaRegMehBlank,
    FaRegMehRollingEyes,
    FaRegMinusSquare,
    FaRegMoneyBillAlt,
    FaRegMoon,
    FaRegNewspaper,
    FaRegObjectGroup,
    FaRegObjectUngroup,
    FaRegPaperPlane,
    FaRegPauseCircle,
    FaRegPlayCircle,
    FaRegPlusSquare,
    FaRegQuestionCircle,
    FaRegRegistered,
    FaRegSadCry,
    FaRegSadTear,
    FaRegSave,
    FaRegShareSquare,
    FaRegSmile,
    FaRegSmileBeam,
    FaRegSmileWink,
    FaRegSnowflake,
    FaRegSquare,
    FaRegStar,
    FaRegStarHalf,
    FaRegStickyNote,
    FaRegStopCircle,
    FaRegSun,
    FaRegSurprise,
    FaRegThumbsDown,
    FaRegThumbsUp,
    FaRegTimesCircle,
    FaRegTired,
    FaRegTrashAlt,
    FaRegUser,
    FaRegUserCircle,
    FaRegWindowClose,
    FaRegWindowMaximize,
    FaRegWindowMinimize,
    FaRegWindowRestore,
    FaRegistered,
    FaRemoveFormat,
    FaRenren,
    FaReply,
    FaReplyAll,
    FaReplyd,
    FaRepublican,
    FaResearchgate,
    FaResolving,
    FaRestroom,
    FaRetweet,
    FaRev,
    FaRibbon,
    FaRing,
    FaRoad,
    FaRobot,
    FaRocket,
    FaRocketchat,
    FaRockrms,
    FaRoute,
    FaRss,
    FaRssSquare,
    FaRubleSign,
    FaRuler,
    FaRulerCombined,
    FaRulerHorizontal,
    FaRulerVertical,
    FaRunning,
    FaRupeeSign,
    FaRust,
    FaSadCry,
    FaSadTear,
    FaSafari,
    FaSalesforce,
    FaSass,
    FaSatellite,
    FaSatelliteDish,
    FaSave,
    FaSchlix,
    FaSchool,
    FaScrewdriver,
    FaScribd,
    FaScroll,
    FaSdCard,
    FaSearch,
    FaSearchDollar,
    FaSearchLocation,
    FaSearchMinus,
    FaSearchPlus,
    FaSearchengin,
    FaSeedling,
    FaSellcast,
    FaSellsy,
    FaServer,
    FaServicestack,
    FaShapes,
    FaShare,
    FaShareAlt,
    FaShareAltSquare,
    FaShareSquare,
    FaShekelSign,
    FaShieldAlt,
    FaShieldVirus,
    FaShip,
    FaShippingFast,
    FaShirtsinbulk,
    FaShoePrints,
    FaShopify,
    FaShoppingBag,
    FaShoppingBasket,
    FaShoppingCart,
    FaShopware,
    FaShower,
    FaShuttleVan,
    FaSign,
    FaSignInAlt,
    FaSignLanguage,
    FaSignOutAlt,
    FaSignal,
    FaSignature,
    FaSimCard,
    FaSimplybuilt,
    FaSink,
    FaSistrix,
    FaSitemap,
    FaSith,
    FaSkating,
    FaSketch,
    FaSkiing,
    FaSkiingNordic,
    FaSkull,
    FaSkullCrossbones,
    FaSkyatlas,
    FaSkype,
    FaSlack,
    FaSlackHash,
    FaSlash,
    FaSleigh,
    FaSlidersH,
    FaSlideshare,
    FaSmile,
    FaSmileBeam,
    FaSmileWink,
    FaSmog,
    FaSmoking,
    FaSmokingBan,
    FaSms,
    FaSnapchat,
    FaSnapchatGhost,
    FaSnapchatSquare,
    FaSnowboarding,
    FaSnowflake,
    FaSnowman,
    FaSnowplow,
    FaSoap,
    FaSocks,
    FaSolarPanel,
    FaSort,
    FaSortAlphaDown,
    FaSortAlphaDownAlt,
    FaSortAlphaUp,
    FaSortAlphaUpAlt,
    FaSortAmountDown,
    FaSortAmountDownAlt,
    FaSortAmountUp,
    FaSortAmountUpAlt,
    FaSortDown,
    FaSortNumericDown,
    FaSortNumericDownAlt,
    FaSortNumericUp,
    FaSortNumericUpAlt,
    FaSortUp,
    FaSoundcloud,
    FaSourcetree,
    FaSpa,
    FaSpaceShuttle,
    FaSpeakap,
    FaSpeakerDeck,
    FaSpellCheck,
    FaSpider,
    FaSpinner,
    FaSplotch,
    FaSpotify,
    FaSprayCan,
    FaSquare,
    FaSquareFull,
    FaSquareRootAlt,
    FaSquarespace,
    FaStackExchange,
    FaStackOverflow,
    FaStackpath,
    FaStamp,
    FaStar,
    FaStarAndCrescent,
    FaStarHalf,
    FaStarHalfAlt,
    FaStarOfDavid,
    FaStarOfLife,
    FaStaylinked,
    FaSteam,
    FaSteamSquare,
    FaSteamSymbol,
    FaStepBackward,
    FaStepForward,
    FaStethoscope,
    FaStickerMule,
    FaStickyNote,
    FaStop,
    FaStopCircle,
    FaStopwatch,
    FaStopwatch20,
    FaStore,
    FaStoreAlt,
    FaStoreAltSlash,
    FaStoreSlash,
    FaStrava,
    FaStream,
    FaStreetView,
    FaStrikethrough,
    FaStripe,
    FaStripeS,
    FaStroopwafel,
    FaStudiovinari,
    FaStumbleupon,
    FaStumbleuponCircle,
    FaSubscript,
    FaSubway,
    FaSuitcase,
    FaSuitcaseRolling,
    FaSun,
    FaSuperpowers,
    FaSuperscript,
    FaSupple,
    FaSurprise,
    FaSuse,
    FaSwatchbook,
    FaSwift,
    FaSwimmer,
    FaSwimmingPool,
    FaSymfony,
    FaSynagogue,
    FaSync,
    FaSyncAlt,
    FaSyringe,
    FaTable,
    FaTableTennis,
    FaTablet,
    FaTabletAlt,
    FaTablets,
    FaTachometerAlt,
    FaTag,
    FaTags,
    FaTape,
    FaTasks,
    FaTaxi,
    FaTeamspeak,
    FaTeeth,
    FaTeethOpen,
    FaTelegram,
    FaTelegramPlane,
    FaTemperatureHigh,
    FaTemperatureLow,
    FaTencentWeibo,
    FaTenge,
    FaTerminal,
    FaTextHeight,
    FaTextWidth,
    FaTh,
    FaThLarge,
    FaThList,
    FaTheRedYeti,
    FaTheaterMasks,
    FaThemeco,
    FaThemeisle,
    FaThermometer,
    FaThermometerEmpty,
    FaThermometerFull,
    FaThermometerHalf,
    FaThermometerQuarter,
    FaThermometerThreeQuarters,
    FaThinkPeaks,
    FaThumbsDown,
    FaThumbsUp,
    FaThumbtack,
    FaTicketAlt,
    FaTiktok,
    FaTimes,
    FaTimesCircle,
    FaTint,
    FaTintSlash,
    FaTired,
    FaToggleOff,
    FaToggleOn,
    FaToilet,
    FaToiletPaper,
    FaToiletPaperSlash,
    FaToolbox,
    FaTools,
    FaTooth,
    FaTorah,
    FaToriiGate,
    FaTractor,
    FaTradeFederation,
    FaTrademark,
    FaTrafficLight,
    FaTrailer,
    FaTrain,
    FaTram,
    FaTransgender,
    FaTransgenderAlt,
    FaTrash,
    FaTrashAlt,
    FaTrashRestore,
    FaTrashRestoreAlt,
    FaTree,
    FaTrello,
    FaTripadvisor,
    FaTrophy,
    FaTruck,
    FaTruckLoading,
    FaTruckMonster,
    FaTruckMoving,
    FaTruckPickup,
    FaTshirt,
    FaTty,
    FaTumblr,
    FaTumblrSquare,
    FaTv,
    FaTwitch,
    FaTwitter,
    FaTwitterSquare,
    FaTypo3,
    FaUber,
    FaUbuntu,
    FaUikit,
    FaUmbraco,
    FaUmbrella,
    FaUmbrellaBeach,
    FaUncharted,
    FaUnderline,
    FaUndo,
    FaUndoAlt,
    FaUniregistry,
    FaUnity,
    FaUniversalAccess,
    FaUniversity,
    FaUnlink,
    FaUnlock,
    FaUnlockAlt,
    FaUnsplash,
    FaUntappd,
    FaUpload,
    FaUps,
    FaUsb,
    FaUser,
    FaUserAlt,
    FaUserAltSlash,
    FaUserAstronaut,
    FaUserCheck,
    FaUserCircle,
    FaUserClock,
    FaUserCog,
    FaUserEdit,
    FaUserFriends,
    FaUserGraduate,
    FaUserInjured,
    FaUserLock,
    FaUserMd,
    FaUserMinus,
    FaUserNinja,
    FaUserNurse,
    FaUserPlus,
    FaUserSecret,
    FaUserShield,
    FaUserSlash,
    FaUserTag,
    FaUserTie,
    FaUserTimes,
    FaUsers,
    FaUsersCog,
    FaUsersSlash,
    FaUsps,
    FaUssunnah,
    FaUtensilSpoon,
    FaUtensils,
    FaVaadin,
    FaVectorSquare,
    FaVenus,
    FaVenusDouble,
    FaVenusMars,
    FaVest,
    FaVestPatches,
    FaViacoin,
    FaViadeo,
    FaViadeoSquare,
    FaVial,
    FaVials,
    FaViber,
    FaVideo,
    FaVideoSlash,
    FaVihara,
    FaVimeo,
    FaVimeoSquare,
    FaVimeoV,
    FaVine,
    FaVirus,
    FaVirusSlash,
    FaViruses,
    FaVk,
    FaVnv,
    FaVoicemail,
    FaVolleyballBall,
    FaVolumeDown,
    FaVolumeMute,
    FaVolumeOff,
    FaVolumeUp,
    FaVoteYea,
    FaVrCardboard,
    FaVuejs,
    FaWalking,
    FaWallet,
    FaWarehouse,
    FaWatchmanMonitoring,
    FaWater,
    FaWaveSquare,
    FaWaze,
    FaWeebly,
    FaWeibo,
    FaWeight,
    FaWeightHanging,
    FaWeixin,
    FaWhatsapp,
    FaWhatsappSquare,
    FaWheelchair,
    FaWhmcs,
    FaWifi,
    FaWikipediaW,
    FaWind,
    FaWindowClose,
    FaWindowMaximize,
    FaWindowMinimize,
    FaWindowRestore,
    FaWindows,
    FaWineBottle,
    FaWineGlass,
    FaWineGlassAlt,
    FaWix,
    FaWizardsOfTheCoast,
    FaWodu,
    FaWolfPackBattalion,
    FaWonSign,
    FaWordpress,
    FaWordpressSimple,
    FaWpbeginner,
    FaWpexplorer,
    FaWpforms,
    FaWpressr,
    FaWrench,
    FaXRay,
    FaXbox,
    FaXing,
    FaXingSquare,
    FaYCombinator,
    FaYahoo,
    FaYammer,
    FaYandex,
    FaYandexInternational,
    FaYarn,
    FaYelp,
    FaYenSign,
    FaYinYang,
    FaYoast,
    FaYoutube,
    FaYoutubeSquare,
    FaZhihu,
} from "react-icons/fa";

const Icons = () => {
    return (
        <Wrap>
            <Fa500Px /> Fa500Px
            <FaAccessibleIcon /> FaAccessibleIcon
            <FaAccusoft /> FaAccusoft
            <FaAcquisitionsIncorporated /> FaAcquisitionsIncorporated
            <FaAdn /> FaAdn
            <FaAdversal /> FaAdversal
            <FaAffiliatetheme /> FaAffiliatetheme
            <FaAirbnb /> FaAirbnb
            <FaAlgolia /> FaAlgolia
            <FaAlipay /> FaAlipay
            <FaAmazonPay /> FaAmazonPay
            <FaAmazon /> FaAmazon
            <FaAmilia /> FaAmilia
            <FaAndroid /> FaAndroid
            <FaAngellist /> FaAngellist
            <FaAngrycreative /> FaAngrycreative
            <FaAngular /> FaAngular
            <FaAppStoreIos /> FaAppStoreIos
            <FaAppStore /> FaAppStore
            <FaApper /> FaApper
            <FaApplePay /> FaApplePay
            <FaApple /> FaApple
            <FaArtstation /> FaArtstation
            <FaAsymmetrik /> FaAsymmetrik
            <FaAtlassian /> FaAtlassian
            <FaAudible /> FaAudible
            <FaAutoprefixer /> FaAutoprefixer
            <FaAvianex /> FaAvianex
            <FaAviato /> FaAviato
            <FaAws /> FaAws
            <FaBandcamp /> FaBandcamp
            <FaBattleNet /> FaBattleNet
            <FaBehanceSquare /> FaBehanceSquare
            <FaBehance /> FaBehance
            <FaBimobject /> FaBimobject
            <FaBitbucket /> FaBitbucket
            <FaBitcoin /> FaBitcoin
            <FaBity /> FaBity
            <FaBlackTie /> FaBlackTie
            <FaBlackberry /> FaBlackberry
            <FaBloggerB /> FaBloggerB
            <FaBlogger /> FaBlogger
            <FaBluetoothB /> FaBluetoothB
            <FaBluetooth /> FaBluetooth
            <FaBootstrap /> FaBootstrap
            <FaBtc /> FaBtc
            <FaBuffer /> FaBuffer
            <FaBuromobelexperte /> FaBuromobelexperte
            <FaBuyNLarge /> FaBuyNLarge
            <FaBuysellads /> FaBuysellads
            <FaCanadianMapleLeaf /> FaCanadianMapleLeaf
            <FaCcAmazonPay /> FaCcAmazonPay
            <FaCcAmex /> FaCcAmex
            <FaCcApplePay /> FaCcApplePay
            <FaCcDinersClub /> FaCcDinersClub
            <FaCcDiscover /> FaCcDiscover
            <FaCcJcb /> FaCcJcb
            <FaCcMastercard /> FaCcMastercard
            <FaCcPaypal /> FaCcPaypal
            <FaCcStripe /> FaCcStripe
            <FaCcVisa /> FaCcVisa
            <FaCentercode /> FaCentercode
            <FaCentos /> FaCentos
            <FaChrome /> FaChrome
            <FaChromecast /> FaChromecast
            <FaCloudflare /> FaCloudflare
            <FaCloudscale /> FaCloudscale
            <FaCloudsmith /> FaCloudsmith
            <FaCloudversify /> FaCloudversify
            <FaCodepen /> FaCodepen
            <FaCodiepie /> FaCodiepie
            <FaConfluence /> FaConfluence
            <FaConnectdevelop /> FaConnectdevelop
            <FaContao /> FaContao
            <FaCottonBureau /> FaCottonBureau
            <FaCpanel /> FaCpanel
            <FaCreativeCommonsBy /> FaCreativeCommonsBy
            <FaCreativeCommonsNcEu /> FaCreativeCommonsNcEu
            <FaCreativeCommonsNcJp /> FaCreativeCommonsNcJp
            <FaCreativeCommonsNc /> FaCreativeCommonsNc
            <FaCreativeCommonsNd /> FaCreativeCommonsNd
            <FaCreativeCommonsPdAlt /> FaCreativeCommonsPdAlt
            <FaCreativeCommonsPd /> FaCreativeCommonsPd
            <FaCreativeCommonsRemix /> FaCreativeCommonsRemix
            <FaCreativeCommonsSa /> FaCreativeCommonsSa
            <FaCreativeCommonsSamplingPlus /> FaCreativeCommonsSamplingPlus
            <FaCreativeCommonsSampling /> FaCreativeCommonsSampling
            <FaCreativeCommonsShare /> FaCreativeCommonsShare
            <FaCreativeCommonsZero /> FaCreativeCommonsZero
            <FaCreativeCommons /> FaCreativeCommons
            <FaCriticalRole /> FaCriticalRole
            <FaCss3Alt /> FaCss3Alt
            <FaCss3 /> FaCss3
            <FaCuttlefish /> FaCuttlefish
            <FaDAndDBeyond /> FaDAndDBeyond
            <FaDAndD /> FaDAndD
            <FaDailymotion /> FaDailymotion
            <FaDashcube /> FaDashcube
            <FaDeezer /> FaDeezer
            <FaDelicious /> FaDelicious
            <FaDeploydog /> FaDeploydog
            <FaDeskpro /> FaDeskpro
            <FaDev /> FaDev
            <FaDeviantart /> FaDeviantart
            <FaDhl /> FaDhl
            <FaDiaspora /> FaDiaspora
            <FaDigg /> FaDigg
            <FaDigitalOcean /> FaDigitalOcean
            <FaDiscord /> FaDiscord
            <FaDiscourse /> FaDiscourse
            <FaDochub /> FaDochub
            <FaDocker /> FaDocker
            <FaDraft2Digital /> FaDraft2Digital
            <FaDribbbleSquare /> FaDribbbleSquare
            <FaDribbble /> FaDribbble
            <FaDropbox /> FaDropbox
            <FaDrupal /> FaDrupal
            <FaDyalog /> FaDyalog
            <FaEarlybirds /> FaEarlybirds
            <FaEbay /> FaEbay
            <FaEdgeLegacy /> FaEdgeLegacy
            <FaEdge /> FaEdge
            <FaElementor /> FaElementor
            <FaEllo /> FaEllo
            <FaEmber /> FaEmber
            <FaEmpire /> FaEmpire
            <FaEnvira /> FaEnvira
            <FaErlang /> FaErlang
            <FaEthereum /> FaEthereum
            <FaEtsy /> FaEtsy
            <FaEvernote /> FaEvernote
            <FaExpeditedssl /> FaExpeditedssl
            <FaFacebookF /> FaFacebookF
            <FaFacebookMessenger /> FaFacebookMessenger
            <FaFacebookSquare /> FaFacebookSquare
            <FaFacebook /> FaFacebook
            <FaFantasyFlightGames /> FaFantasyFlightGames
            <FaFedex /> FaFedex
            <FaFedora /> FaFedora
            <FaFigma /> FaFigma
            <FaFirefoxBrowser /> FaFirefoxBrowser
            <FaFirefox /> FaFirefox
            <FaFirstOrderAlt /> FaFirstOrderAlt
            <FaFirstOrder /> FaFirstOrder
            <FaFirstdraft /> FaFirstdraft
            <FaFlickr /> FaFlickr
            <FaFlipboard /> FaFlipboard
            <FaFly /> FaFly
            <FaFontAwesomeAlt /> FaFontAwesomeAlt
            <FaFontAwesomeFlag /> FaFontAwesomeFlag
            <FaFontAwesomeLogoFull /> FaFontAwesomeLogoFull
            <FaFontAwesome /> FaFontAwesome
            <FaFonticonsFi /> FaFonticonsFi
            <FaFonticons /> FaFonticons
            <FaFortAwesomeAlt /> FaFortAwesomeAlt
            <FaFortAwesome /> FaFortAwesome
            <FaForumbee /> FaForumbee
            <FaFoursquare /> FaFoursquare
            <FaFreeCodeCamp /> FaFreeCodeCamp
            <FaFreebsd /> FaFreebsd
            <FaFulcrum /> FaFulcrum
            <FaGalacticRepublic /> FaGalacticRepublic
            <FaGalacticSenate /> FaGalacticSenate
            <FaGetPocket /> FaGetPocket
            <FaGgCircle /> FaGgCircle
            <FaGg /> FaGg
            <FaGitAlt /> FaGitAlt
            <FaGitSquare /> FaGitSquare
            <FaGit /> FaGit
            <FaGithubAlt /> FaGithubAlt
            <FaGithubSquare /> FaGithubSquare
            <FaGithub /> FaGithub
            <FaGitkraken /> FaGitkraken
            <FaGitlab /> FaGitlab
            <FaGitter /> FaGitter
            <FaGlideG /> FaGlideG
            <FaGlide /> FaGlide
            <FaGofore /> FaGofore
            <FaGoodreadsG /> FaGoodreadsG
            <FaGoodreads /> FaGoodreads
            <FaGoogleDrive /> FaGoogleDrive
            <FaGooglePay /> FaGooglePay
            <FaGooglePlay /> FaGooglePlay
            <FaGooglePlusG /> FaGooglePlusG
            <FaGooglePlusSquare /> FaGooglePlusSquare
            <FaGooglePlus /> FaGooglePlus
            <FaGoogleWallet /> FaGoogleWallet
            <FaGoogle /> FaGoogle
            <FaGratipay /> FaGratipay
            <FaGrav /> FaGrav
            <FaGripfire /> FaGripfire
            <FaGrunt /> FaGrunt
            <FaGuilded /> FaGuilded
            <FaGulp /> FaGulp
            <FaHackerNewsSquare /> FaHackerNewsSquare
            <FaHackerNews /> FaHackerNews
            <FaHackerrank /> FaHackerrank
            <FaHips /> FaHips
            <FaHireAHelper /> FaHireAHelper
            <FaHive /> FaHive
            <FaHooli /> FaHooli
            <FaHornbill /> FaHornbill
            <FaHotjar /> FaHotjar
            <FaHouzz /> FaHouzz
            <FaHtml5 /> FaHtml5
            <FaHubspot /> FaHubspot
            <FaIdeal /> FaIdeal
            <FaImdb /> FaImdb
            <FaInnosoft /> FaInnosoft
            <FaInstagramSquare /> FaInstagramSquare
            <FaInstagram /> FaInstagram
            <FaInstalod /> FaInstalod
            <FaIntercom /> FaIntercom
            <FaInternetExplorer /> FaInternetExplorer
            <FaInvision /> FaInvision
            <FaIoxhost /> FaIoxhost
            <FaItchIo /> FaItchIo
            <FaItunesNote /> FaItunesNote
            <FaItunes /> FaItunes
            <FaJava /> FaJava
            <FaJediOrder /> FaJediOrder
            <FaJenkins /> FaJenkins
            <FaJira /> FaJira
            <FaJoget /> FaJoget
            <FaJoomla /> FaJoomla
            <FaJsSquare /> FaJsSquare
            <FaJs /> FaJs
            <FaJsfiddle /> FaJsfiddle
            <FaKaggle /> FaKaggle
            <FaKeybase /> FaKeybase
            <FaKeycdn /> FaKeycdn
            <FaKickstarterK /> FaKickstarterK
            <FaKickstarter /> FaKickstarter
            <FaKorvue /> FaKorvue
            <FaLaravel /> FaLaravel
            <FaLastfmSquare /> FaLastfmSquare
            <FaLastfm /> FaLastfm
            <FaLeanpub /> FaLeanpub
            <FaLess /> FaLess
            <FaLine /> FaLine
            <FaLinkedinIn /> FaLinkedinIn
            <FaLinkedin /> FaLinkedin
            <FaLinode /> FaLinode
            <FaLinux /> FaLinux
            <FaLyft /> FaLyft
            <FaMagento /> FaMagento
            <FaMailchimp /> FaMailchimp
            <FaMandalorian /> FaMandalorian
            <FaMarkdown /> FaMarkdown
            <FaMastodon /> FaMastodon
            <FaMaxcdn /> FaMaxcdn
            <FaMdb /> FaMdb
            <FaMedapps /> FaMedapps
            <FaMediumM /> FaMediumM
            <FaMedium /> FaMedium
            <FaMedrt /> FaMedrt
            <FaMeetup /> FaMeetup
            <FaMegaport /> FaMegaport
            <FaMendeley /> FaMendeley
            <FaMicroblog /> FaMicroblog
            <FaMicrosoft /> FaMicrosoft
            <FaMix /> FaMix
            <FaMixcloud /> FaMixcloud
            <FaMixer /> FaMixer
            <FaMizuni /> FaMizuni
            <FaModx /> FaModx
            <FaMonero /> FaMonero
            <FaNapster /> FaNapster
            <FaNeos /> FaNeos
            <FaNimblr /> FaNimblr
            <FaNodeJs /> FaNodeJs
            <FaNode /> FaNode
            <FaNpm /> FaNpm
            <FaNs8 /> FaNs8
            <FaNutritionix /> FaNutritionix
            <FaOctopusDeploy /> FaOctopusDeploy
            <FaOdnoklassnikiSquare /> FaOdnoklassnikiSquare
            <FaOdnoklassniki /> FaOdnoklassniki
            <FaOldRepublic /> FaOldRepublic
            <FaOpencart /> FaOpencart
            <FaOpenid /> FaOpenid
            <FaOpera /> FaOpera
            <FaOptinMonster /> FaOptinMonster
            <FaOrcid /> FaOrcid
            <FaOsi /> FaOsi
            <FaPage4 /> FaPage4
            <FaPagelines /> FaPagelines
            <FaPalfed /> FaPalfed
            <FaPatreon /> FaPatreon
            <FaPaypal /> FaPaypal
            <FaPennyArcade /> FaPennyArcade
            <FaPerbyte /> FaPerbyte
            <FaPeriscope /> FaPeriscope
            <FaPhabricator /> FaPhabricator
            <FaPhoenixFramework /> FaPhoenixFramework
            <FaPhoenixSquadron /> FaPhoenixSquadron
            <FaPhp /> FaPhp
            <FaPiedPiperAlt /> FaPiedPiperAlt
            <FaPiedPiperHat /> FaPiedPiperHat
            <FaPiedPiperPp /> FaPiedPiperPp
            <FaPiedPiperSquare /> FaPiedPiperSquare
            <FaPiedPiper /> FaPiedPiper
            <FaPinterestP /> FaPinterestP
            <FaPinterestSquare /> FaPinterestSquare
            <FaPinterest /> FaPinterest
            <FaPlaystation /> FaPlaystation
            <FaProductHunt /> FaProductHunt
            <FaPushed /> FaPushed
            <FaPython /> FaPython
            <FaQq /> FaQq
            <FaQuinscape /> FaQuinscape
            <FaQuora /> FaQuora
            <FaRProject /> FaRProject
            <FaRaspberryPi /> FaRaspberryPi
            <FaRavelry /> FaRavelry
            <FaReact /> FaReact
            <FaReacteurope /> FaReacteurope
            <FaReadme /> FaReadme
            <FaRebel /> FaRebel
            <FaRedRiver /> FaRedRiver
            <FaRedditAlien /> FaRedditAlien
            <FaRedditSquare /> FaRedditSquare
            <FaReddit /> FaReddit
            <FaRedhat /> FaRedhat
            <FaRenren /> FaRenren
            <FaReplyd /> FaReplyd
            <FaResearchgate /> FaResearchgate
            <FaResolving /> FaResolving
            <FaRev /> FaRev
            <FaRocketchat /> FaRocketchat
            <FaRockrms /> FaRockrms
            <FaRust /> FaRust
            <FaSafari /> FaSafari
            <FaSalesforce /> FaSalesforce
            <FaSass /> FaSass
            <FaSchlix /> FaSchlix
            <FaScribd /> FaScribd
            <FaSearchengin /> FaSearchengin
            <FaSellcast /> FaSellcast
            <FaSellsy /> FaSellsy
            <FaServicestack /> FaServicestack
            <FaShirtsinbulk /> FaShirtsinbulk
            <FaShopify /> FaShopify
            <FaShopware /> FaShopware
            <FaSimplybuilt /> FaSimplybuilt
            <FaSistrix /> FaSistrix
            <FaSith /> FaSith
            <FaSketch /> FaSketch
            <FaSkyatlas /> FaSkyatlas
            <FaSkype /> FaSkype
            <FaSlackHash /> FaSlackHash
            <FaSlack /> FaSlack
            <FaSlideshare /> FaSlideshare
            <FaSnapchatGhost /> FaSnapchatGhost
            <FaSnapchatSquare /> FaSnapchatSquare
            <FaSnapchat /> FaSnapchat
            <FaSoundcloud /> FaSoundcloud
            <FaSourcetree /> FaSourcetree
            <FaSpeakap /> FaSpeakap
            <FaSpeakerDeck /> FaSpeakerDeck
            <FaSpotify /> FaSpotify
            <FaSquarespace /> FaSquarespace
            <FaStackExchange /> FaStackExchange
            <FaStackOverflow /> FaStackOverflow
            <FaStackpath /> FaStackpath
            <FaStaylinked /> FaStaylinked
            <FaSteamSquare /> FaSteamSquare
            <FaSteamSymbol /> FaSteamSymbol
            <FaSteam /> FaSteam
            <FaStickerMule /> FaStickerMule
            <FaStrava /> FaStrava
            <FaStripeS /> FaStripeS
            <FaStripe /> FaStripe
            <FaStudiovinari /> FaStudiovinari
            <FaStumbleuponCircle /> FaStumbleuponCircle
            <FaStumbleupon /> FaStumbleupon
            <FaSuperpowers /> FaSuperpowers
            <FaSupple /> FaSupple
            <FaSuse /> FaSuse
            <FaSwift /> FaSwift
            <FaSymfony /> FaSymfony
            <FaTeamspeak /> FaTeamspeak
            <FaTelegramPlane /> FaTelegramPlane
            <FaTelegram /> FaTelegram
            <FaTencentWeibo /> FaTencentWeibo
            <FaTheRedYeti /> FaTheRedYeti
            <FaThemeco /> FaThemeco
            <FaThemeisle /> FaThemeisle
            <FaThinkPeaks /> FaThinkPeaks
            <FaTiktok /> FaTiktok
            <FaTradeFederation /> FaTradeFederation
            <FaTrello /> FaTrello
            <FaTripadvisor /> FaTripadvisor
            <FaTumblrSquare /> FaTumblrSquare
            <FaTumblr /> FaTumblr
            <FaTwitch /> FaTwitch
            <FaTwitterSquare /> FaTwitterSquare
            <FaTwitter /> FaTwitter
            <FaTypo3 /> FaTypo3
            <FaUber /> FaUber
            <FaUbuntu /> FaUbuntu
            <FaUikit /> FaUikit
            <FaUmbraco /> FaUmbraco
            <FaUncharted /> FaUncharted
            <FaUniregistry /> FaUniregistry
            <FaUnity /> FaUnity
            <FaUnsplash /> FaUnsplash
            <FaUntappd /> FaUntappd
            <FaUps /> FaUps
            <FaUsb /> FaUsb
            <FaUsps /> FaUsps
            <FaUssunnah /> FaUssunnah
            <FaVaadin /> FaVaadin
            <FaViacoin /> FaViacoin
            <FaViadeoSquare /> FaViadeoSquare
            <FaViadeo /> FaViadeo
            <FaViber /> FaViber
            <FaVimeoSquare /> FaVimeoSquare
            <FaVimeoV /> FaVimeoV
            <FaVimeo /> FaVimeo
            <FaVine /> FaVine
            <FaVk /> FaVk
            <FaVnv /> FaVnv
            <FaVuejs /> FaVuejs
            <FaWatchmanMonitoring /> FaWatchmanMonitoring
            <FaWaze /> FaWaze
            <FaWeebly /> FaWeebly
            <FaWeibo /> FaWeibo
            <FaWeixin /> FaWeixin
            <FaWhatsappSquare /> FaWhatsappSquare
            <FaWhatsapp /> FaWhatsapp
            <FaWhmcs /> FaWhmcs
            <FaWikipediaW /> FaWikipediaW
            <FaWindows /> FaWindows
            <FaWix /> FaWix
            <FaWizardsOfTheCoast /> FaWizardsOfTheCoast
            <FaWodu /> FaWodu
            <FaWolfPackBattalion /> FaWolfPackBattalion
            <FaWordpressSimple /> FaWordpressSimple
            <FaWordpress /> FaWordpress
            <FaWpbeginner /> FaWpbeginner
            <FaWpexplorer /> FaWpexplorer
            <FaWpforms /> FaWpforms
            <FaWpressr /> FaWpressr
            <FaXbox /> FaXbox
            <FaXingSquare /> FaXingSquare
            <FaXing /> FaXing
            <FaYCombinator /> FaYCombinator
            <FaYahoo /> FaYahoo
            <FaYammer /> FaYammer
            <FaYandexInternational /> FaYandexInternational
            <FaYandex /> FaYandex
            <FaYarn /> FaYarn
            <FaYelp /> FaYelp
            <FaYoast /> FaYoast
            <FaYoutubeSquare /> FaYoutubeSquare
            <FaYoutube /> FaYoutube
            <FaZhihu /> FaZhihu
            <FaAd /> FaAd
            <FaAddressBook /> FaAddressBook
            <FaAddressCard /> FaAddressCard
            <FaAdjust /> FaAdjust
            <FaAirFreshener /> FaAirFreshener
            <FaAlignCenter /> FaAlignCenter
            <FaAlignJustify /> FaAlignJustify
            <FaAlignLeft /> FaAlignLeft
            <FaAlignRight /> FaAlignRight
            <FaAllergies /> FaAllergies
            <FaAmbulance /> FaAmbulance
            <FaAmericanSignLanguageInterpreting /> FaAmericanSignLanguageInterpreting
            <FaAnchor /> FaAnchor
            <FaAngleDoubleDown /> FaAngleDoubleDown
            <FaAngleDoubleLeft /> FaAngleDoubleLeft
            <FaAngleDoubleRight /> FaAngleDoubleRight
            <FaAngleDoubleUp /> FaAngleDoubleUp
            <FaAngleDown /> FaAngleDown
            <FaAngleLeft /> FaAngleLeft
            <FaAngleRight /> FaAngleRight
            <FaAngleUp /> FaAngleUp
            <FaAngry /> FaAngry
            <FaAnkh /> FaAnkh
            <FaAppleAlt /> FaAppleAlt
            <FaArchive /> FaArchive
            <FaArchway /> FaArchway
            <FaArrowAltCircleDown /> FaArrowAltCircleDown
            <FaArrowAltCircleLeft /> FaArrowAltCircleLeft
            <FaArrowAltCircleRight /> FaArrowAltCircleRight
            <FaArrowAltCircleUp /> FaArrowAltCircleUp
            <FaArrowCircleDown /> FaArrowCircleDown
            <FaArrowCircleLeft /> FaArrowCircleLeft
            <FaArrowCircleRight /> FaArrowCircleRight
            <FaArrowCircleUp /> FaArrowCircleUp
            <FaArrowDown /> FaArrowDown
            <FaArrowLeft /> FaArrowLeft
            <FaArrowRight /> FaArrowRight
            <FaArrowUp /> FaArrowUp
            <FaArrowsAltH /> FaArrowsAltH
            <FaArrowsAltV /> FaArrowsAltV
            <FaArrowsAlt /> FaArrowsAlt
            <FaAssistiveListeningSystems /> FaAssistiveListeningSystems
            <FaAsterisk /> FaAsterisk
            <FaAt /> FaAt
            <FaAtlas /> FaAtlas
            <FaAtom /> FaAtom
            <FaAudioDescription /> FaAudioDescription
            <FaAward /> FaAward
            <FaBabyCarriage /> FaBabyCarriage
            <FaBaby /> FaBaby
            <FaBackspace /> FaBackspace
            <FaBackward /> FaBackward
            <FaBacon /> FaBacon
            <FaBacteria /> FaBacteria
            <FaBacterium /> FaBacterium
            <FaBahai /> FaBahai
            <FaBalanceScaleLeft /> FaBalanceScaleLeft
            <FaBalanceScaleRight /> FaBalanceScaleRight
            <FaBalanceScale /> FaBalanceScale
            <FaBan /> FaBan
            <FaBandAid /> FaBandAid
            <FaBarcode /> FaBarcode
            <FaBars /> FaBars
            <FaBaseballBall /> FaBaseballBall
            <FaBasketballBall /> FaBasketballBall
            <FaBath /> FaBath
            <FaBatteryEmpty /> FaBatteryEmpty
            <FaBatteryFull /> FaBatteryFull
            <FaBatteryHalf /> FaBatteryHalf
            <FaBatteryQuarter /> FaBatteryQuarter
            <FaBatteryThreeQuarters /> FaBatteryThreeQuarters
            <FaBed /> FaBed
            <FaBeer /> FaBeer
            <FaBellSlash /> FaBellSlash
            <FaBell /> FaBell
            <FaBezierCurve /> FaBezierCurve
            <FaBible /> FaBible
            <FaBicycle /> FaBicycle
            <FaBiking /> FaBiking
            <FaBinoculars /> FaBinoculars
            <FaBiohazard /> FaBiohazard
            <FaBirthdayCake /> FaBirthdayCake
            <FaBlenderPhone /> FaBlenderPhone
            <FaBlender /> FaBlender
            <FaBlind /> FaBlind
            <FaBlog /> FaBlog
            <FaBold /> FaBold
            <FaBolt /> FaBolt
            <FaBomb /> FaBomb
            <FaBone /> FaBone
            <FaBong /> FaBong
            <FaBookDead /> FaBookDead
            <FaBookMedical /> FaBookMedical
            <FaBookOpen /> FaBookOpen
            <FaBookReader /> FaBookReader
            <FaBook /> FaBook
            <FaBookmark /> FaBookmark
            <FaBorderAll /> FaBorderAll
            <FaBorderNone /> FaBorderNone
            <FaBorderStyle /> FaBorderStyle
            <FaBowlingBall /> FaBowlingBall
            <FaBoxOpen /> FaBoxOpen
            <FaBoxTissue /> FaBoxTissue
            <FaBox /> FaBox
            <FaBoxes /> FaBoxes
            <FaBraille /> FaBraille
            <FaBrain /> FaBrain
            <FaBreadSlice /> FaBreadSlice
            <FaBriefcaseMedical /> FaBriefcaseMedical
            <FaBriefcase /> FaBriefcase
            <FaBroadcastTower /> FaBroadcastTower
            <FaBroom /> FaBroom
            <FaBrush /> FaBrush
            <FaBug /> FaBug
            <FaBuilding /> FaBuilding
            <FaBullhorn /> FaBullhorn
            <FaBullseye /> FaBullseye
            <FaBurn /> FaBurn
            <FaBusAlt /> FaBusAlt
            <FaBus /> FaBus
            <FaBusinessTime /> FaBusinessTime
            <FaCalculator /> FaCalculator
            <FaCalendarAlt /> FaCalendarAlt
            <FaCalendarCheck /> FaCalendarCheck
            <FaCalendarDay /> FaCalendarDay
            <FaCalendarMinus /> FaCalendarMinus
            <FaCalendarPlus /> FaCalendarPlus
            <FaCalendarTimes /> FaCalendarTimes
            <FaCalendarWeek /> FaCalendarWeek
            <FaCalendar /> FaCalendar
            <FaCameraRetro /> FaCameraRetro
            <FaCamera /> FaCamera
            <FaCampground /> FaCampground
            <FaCandyCane /> FaCandyCane
            <FaCannabis /> FaCannabis
            <FaCapsules /> FaCapsules
            <FaCarAlt /> FaCarAlt
            <FaCarBattery /> FaCarBattery
            <FaCarCrash /> FaCarCrash
            <FaCarSide /> FaCarSide
            <FaCar /> FaCar
            <FaCaravan /> FaCaravan
            <FaCaretDown /> FaCaretDown
            <FaCaretLeft /> FaCaretLeft
            <FaCaretRight /> FaCaretRight
            <FaCaretSquareDown /> FaCaretSquareDown
            <FaCaretSquareLeft /> FaCaretSquareLeft
            <FaCaretSquareRight /> FaCaretSquareRight
            <FaCaretSquareUp /> FaCaretSquareUp
            <FaCaretUp /> FaCaretUp
            <FaCarrot /> FaCarrot
            <FaCartArrowDown /> FaCartArrowDown
            <FaCartPlus /> FaCartPlus
            <FaCashRegister /> FaCashRegister
            <FaCat /> FaCat
            <FaCertificate /> FaCertificate
            <FaChair /> FaChair
            <FaChalkboardTeacher /> FaChalkboardTeacher
            <FaChalkboard /> FaChalkboard
            <FaChargingStation /> FaChargingStation
            <FaChartArea /> FaChartArea
            <FaChartBar /> FaChartBar
            <FaChartLine /> FaChartLine
            <FaChartPie /> FaChartPie
            <FaCheckCircle /> FaCheckCircle
            <FaCheckDouble /> FaCheckDouble
            <FaCheckSquare /> FaCheckSquare
            <FaCheck /> FaCheck
            <FaCheese /> FaCheese
            <FaChessBishop /> FaChessBishop
            <FaChessBoard /> FaChessBoard
            <FaChessKing /> FaChessKing
            <FaChessKnight /> FaChessKnight
            <FaChessPawn /> FaChessPawn
            <FaChessQueen /> FaChessQueen
            <FaChessRook /> FaChessRook
            <FaChess /> FaChess
            <FaChevronCircleDown /> FaChevronCircleDown
            <FaChevronCircleLeft /> FaChevronCircleLeft
            <FaChevronCircleRight /> FaChevronCircleRight
            <FaChevronCircleUp /> FaChevronCircleUp
            <FaChevronDown /> FaChevronDown
            <FaChevronLeft /> FaChevronLeft
            <FaChevronRight /> FaChevronRight
            <FaChevronUp /> FaChevronUp
            <FaChild /> FaChild
            <FaChurch /> FaChurch
            <FaCircleNotch /> FaCircleNotch
            <FaCircle /> FaCircle
            <FaCity /> FaCity
            <FaClinicMedical /> FaClinicMedical
            <FaClipboardCheck /> FaClipboardCheck
            <FaClipboardList /> FaClipboardList
            <FaClipboard /> FaClipboard
            <FaClock /> FaClock
            <FaClone /> FaClone
            <FaClosedCaptioning /> FaClosedCaptioning
            <FaCloudDownloadAlt /> FaCloudDownloadAlt
            <FaCloudMeatball /> FaCloudMeatball
            <FaCloudMoonRain /> FaCloudMoonRain
            <FaCloudMoon /> FaCloudMoon
            <FaCloudRain /> FaCloudRain
            <FaCloudShowersHeavy /> FaCloudShowersHeavy
            <FaCloudSunRain /> FaCloudSunRain
            <FaCloudSun /> FaCloudSun
            <FaCloudUploadAlt /> FaCloudUploadAlt
            <FaCloud /> FaCloud
            <FaCocktail /> FaCocktail
            <FaCodeBranch /> FaCodeBranch
            <FaCode /> FaCode
            <FaCoffee /> FaCoffee
            <FaCog /> FaCog
            <FaCogs /> FaCogs
            <FaCoins /> FaCoins
            <FaColumns /> FaColumns
            <FaCommentAlt /> FaCommentAlt
            <FaCommentDollar /> FaCommentDollar
            <FaCommentDots /> FaCommentDots
            <FaCommentMedical /> FaCommentMedical
            <FaCommentSlash /> FaCommentSlash
            <FaComment /> FaComment
            <FaCommentsDollar /> FaCommentsDollar
            <FaComments /> FaComments
            <FaCompactDisc /> FaCompactDisc
            <FaCompass /> FaCompass
            <FaCompressAlt /> FaCompressAlt
            <FaCompressArrowsAlt /> FaCompressArrowsAlt
            <FaCompress /> FaCompress
            <FaConciergeBell /> FaConciergeBell
            <FaCookieBite /> FaCookieBite
            <FaCookie /> FaCookie
            <FaCopy /> FaCopy
            <FaCopyright /> FaCopyright
            <FaCouch /> FaCouch
            <FaCreditCard /> FaCreditCard
            <FaCropAlt /> FaCropAlt
            <FaCrop /> FaCrop
            <FaCross /> FaCross
            <FaCrosshairs /> FaCrosshairs
            <FaCrow /> FaCrow
            <FaCrown /> FaCrown
            <FaCrutch /> FaCrutch
            <FaCube /> FaCube
            <FaCubes /> FaCubes
            <FaCut /> FaCut
            <FaDatabase /> FaDatabase
            <FaDeaf /> FaDeaf
            <FaDemocrat /> FaDemocrat
            <FaDesktop /> FaDesktop
            <FaDharmachakra /> FaDharmachakra
            <FaDiagnoses /> FaDiagnoses
            <FaDiceD20 /> FaDiceD20
            <FaDiceD6 /> FaDiceD6
            <FaDiceFive /> FaDiceFive
            <FaDiceFour /> FaDiceFour
            <FaDiceOne /> FaDiceOne
            <FaDiceSix /> FaDiceSix
            <FaDiceThree /> FaDiceThree
            <FaDiceTwo /> FaDiceTwo
            <FaDice /> FaDice
            <FaDigitalTachograph /> FaDigitalTachograph
            <FaDirections /> FaDirections
            <FaDisease /> FaDisease
            <FaDivide /> FaDivide
            <FaDizzy /> FaDizzy
            <FaDna /> FaDna
            <FaDog /> FaDog
            <FaDollarSign /> FaDollarSign
            <FaDollyFlatbed /> FaDollyFlatbed
            <FaDolly /> FaDolly
            <FaDonate /> FaDonate
            <FaDoorClosed /> FaDoorClosed
            <FaDoorOpen /> FaDoorOpen
            <FaDotCircle /> FaDotCircle
            <FaDove /> FaDove
            <FaDownload /> FaDownload
            <FaDraftingCompass /> FaDraftingCompass
            <FaDragon /> FaDragon
            <FaDrawPolygon /> FaDrawPolygon
            <FaDrumSteelpan /> FaDrumSteelpan
            <FaDrum /> FaDrum
            <FaDrumstickBite /> FaDrumstickBite
            <FaDumbbell /> FaDumbbell
            <FaDumpsterFire /> FaDumpsterFire
            <FaDumpster /> FaDumpster
            <FaDungeon /> FaDungeon
            <FaEdit /> FaEdit
            <FaEgg /> FaEgg
            <FaEject /> FaEject
            <FaEllipsisH /> FaEllipsisH
            <FaEllipsisV /> FaEllipsisV
            <FaEnvelopeOpenText /> FaEnvelopeOpenText
            <FaEnvelopeOpen /> FaEnvelopeOpen
            <FaEnvelopeSquare /> FaEnvelopeSquare
            <FaEnvelope /> FaEnvelope
            <FaEquals /> FaEquals
            <FaEraser /> FaEraser
            <FaEthernet /> FaEthernet
            <FaEuroSign /> FaEuroSign
            <FaExchangeAlt /> FaExchangeAlt
            <FaExclamationCircle /> FaExclamationCircle
            <FaExclamationTriangle /> FaExclamationTriangle
            <FaExclamation /> FaExclamation
            <FaExpandAlt /> FaExpandAlt
            <FaExpandArrowsAlt /> FaExpandArrowsAlt
            <FaExpand /> FaExpand
            <FaExternalLinkAlt /> FaExternalLinkAlt
            <FaExternalLinkSquareAlt /> FaExternalLinkSquareAlt
            <FaEyeDropper /> FaEyeDropper
            <FaEyeSlash /> FaEyeSlash
            <FaEye /> FaEye
            <FaFan /> FaFan
            <FaFastBackward /> FaFastBackward
            <FaFastForward /> FaFastForward
            <FaFaucet /> FaFaucet
            <FaFax /> FaFax
            <FaFeatherAlt /> FaFeatherAlt
            <FaFeather /> FaFeather
            <FaFemale /> FaFemale
            <FaFighterJet /> FaFighterJet
            <FaFileAlt /> FaFileAlt
            <FaFileArchive /> FaFileArchive
            <FaFileAudio /> FaFileAudio
            <FaFileCode /> FaFileCode
            <FaFileContract /> FaFileContract
            <FaFileCsv /> FaFileCsv
            <FaFileDownload /> FaFileDownload
            <FaFileExcel /> FaFileExcel
            <FaFileExport /> FaFileExport
            <FaFileImage /> FaFileImage
            <FaFileImport /> FaFileImport
            <FaFileInvoiceDollar /> FaFileInvoiceDollar
            <FaFileInvoice /> FaFileInvoice
            <FaFileMedicalAlt /> FaFileMedicalAlt
            <FaFileMedical /> FaFileMedical
            <FaFilePdf /> FaFilePdf
            <FaFilePowerpoint /> FaFilePowerpoint
            <FaFilePrescription /> FaFilePrescription
            <FaFileSignature /> FaFileSignature
            <FaFileUpload /> FaFileUpload
            <FaFileVideo /> FaFileVideo
            <FaFileWord /> FaFileWord
            <FaFile /> FaFile
            <FaFillDrip /> FaFillDrip
            <FaFill /> FaFill
            <FaFilm /> FaFilm
            <FaFilter /> FaFilter
            <FaFingerprint /> FaFingerprint
            <FaFireAlt /> FaFireAlt
            <FaFireExtinguisher /> FaFireExtinguisher
            <FaFire /> FaFire
            <FaFirstAid /> FaFirstAid
            <FaFish /> FaFish
            <FaFistRaised /> FaFistRaised
            <FaFlagCheckered /> FaFlagCheckered
            <FaFlagUsa /> FaFlagUsa
            <FaFlag /> FaFlag
            <FaFlask /> FaFlask
            <FaFlushed /> FaFlushed
            <FaFolderMinus /> FaFolderMinus
            <FaFolderOpen /> FaFolderOpen
            <FaFolderPlus /> FaFolderPlus
            <FaFolder /> FaFolder
            <FaFont /> FaFont
            <FaFootballBall /> FaFootballBall
            <FaForward /> FaForward
            <FaFrog /> FaFrog
            <FaFrownOpen /> FaFrownOpen
            <FaFrown /> FaFrown
            <FaFunnelDollar /> FaFunnelDollar
            <FaFutbol /> FaFutbol
            <FaGamepad /> FaGamepad
            <FaGasPump /> FaGasPump
            <FaGavel /> FaGavel
            <FaGem /> FaGem
            <FaGenderless /> FaGenderless
            <FaGhost /> FaGhost
            <FaGift /> FaGift
            <FaGifts /> FaGifts
            <FaGlassCheers /> FaGlassCheers
            <FaGlassMartiniAlt /> FaGlassMartiniAlt
            <FaGlassMartini /> FaGlassMartini
            <FaGlassWhiskey /> FaGlassWhiskey
            <FaGlasses /> FaGlasses
            <FaGlobeAfrica /> FaGlobeAfrica
            <FaGlobeAmericas /> FaGlobeAmericas
            <FaGlobeAsia /> FaGlobeAsia
            <FaGlobeEurope /> FaGlobeEurope
            <FaGlobe /> FaGlobe
            <FaGolfBall /> FaGolfBall
            <FaGopuram /> FaGopuram
            <FaGraduationCap /> FaGraduationCap
            <FaGreaterThanEqual /> FaGreaterThanEqual
            <FaGreaterThan /> FaGreaterThan
            <FaGrimace /> FaGrimace
            <FaGrinAlt /> FaGrinAlt
            <FaGrinBeamSweat /> FaGrinBeamSweat
            <FaGrinBeam /> FaGrinBeam
            <FaGrinHearts /> FaGrinHearts
            <FaGrinSquintTears /> FaGrinSquintTears
            <FaGrinSquint /> FaGrinSquint
            <FaGrinStars /> FaGrinStars
            <FaGrinTears /> FaGrinTears
            <FaGrinTongueSquint /> FaGrinTongueSquint
            <FaGrinTongueWink /> FaGrinTongueWink
            <FaGrinTongue /> FaGrinTongue
            <FaGrinWink /> FaGrinWink
            <FaGrin /> FaGrin
            <FaGripHorizontal /> FaGripHorizontal
            <FaGripLinesVertical /> FaGripLinesVertical
            <FaGripLines /> FaGripLines
            <FaGripVertical /> FaGripVertical
            <FaGuitar /> FaGuitar
            <FaHSquare /> FaHSquare
            <FaHamburger /> FaHamburger
            <FaHammer /> FaHammer
            <FaHamsa /> FaHamsa
            <FaHandHoldingHeart /> FaHandHoldingHeart
            <FaHandHoldingMedical /> FaHandHoldingMedical
            <FaHandHoldingUsd /> FaHandHoldingUsd
            <FaHandHoldingWater /> FaHandHoldingWater
            <FaHandHolding /> FaHandHolding
            <FaHandLizard /> FaHandLizard
            <FaHandMiddleFinger /> FaHandMiddleFinger
            <FaHandPaper /> FaHandPaper
            <FaHandPeace /> FaHandPeace
            <FaHandPointDown /> FaHandPointDown
            <FaHandPointLeft /> FaHandPointLeft
            <FaHandPointRight /> FaHandPointRight
            <FaHandPointUp /> FaHandPointUp
            <FaHandPointer /> FaHandPointer
            <FaHandRock /> FaHandRock
            <FaHandScissors /> FaHandScissors
            <FaHandSparkles /> FaHandSparkles
            <FaHandSpock /> FaHandSpock
            <FaHandsHelping /> FaHandsHelping
            <FaHandsWash /> FaHandsWash
            <FaHands /> FaHands
            <FaHandshakeAltSlash /> FaHandshakeAltSlash
            <FaHandshakeSlash /> FaHandshakeSlash
            <FaHandshake /> FaHandshake
            <FaHanukiah /> FaHanukiah
            <FaHardHat /> FaHardHat
            <FaHashtag /> FaHashtag
            <FaHatCowboySide /> FaHatCowboySide
            <FaHatCowboy /> FaHatCowboy
            <FaHatWizard /> FaHatWizard
            <FaHdd /> FaHdd
            <FaHeadSideCoughSlash /> FaHeadSideCoughSlash
            <FaHeadSideCough /> FaHeadSideCough
            <FaHeadSideMask /> FaHeadSideMask
            <FaHeadSideVirus /> FaHeadSideVirus
            <FaHeading /> FaHeading
            <FaHeadphonesAlt /> FaHeadphonesAlt
            <FaHeadphones /> FaHeadphones
            <FaHeadset /> FaHeadset
            <FaHeartBroken /> FaHeartBroken
            <FaHeart /> FaHeart
            <FaHeartbeat /> FaHeartbeat
            <FaHelicopter /> FaHelicopter
            <FaHighlighter /> FaHighlighter
            <FaHiking /> FaHiking
            <FaHippo /> FaHippo
            <FaHistory /> FaHistory
            <FaHockeyPuck /> FaHockeyPuck
            <FaHollyBerry /> FaHollyBerry
            <FaHome /> FaHome
            <FaHorseHead /> FaHorseHead
            <FaHorse /> FaHorse
            <FaHospitalAlt /> FaHospitalAlt
            <FaHospitalSymbol /> FaHospitalSymbol
            <FaHospitalUser /> FaHospitalUser
            <FaHospital /> FaHospital
            <FaHotTub /> FaHotTub
            <FaHotdog /> FaHotdog
            <FaHotel /> FaHotel
            <FaHourglassEnd /> FaHourglassEnd
            <FaHourglassHalf /> FaHourglassHalf
            <FaHourglassStart /> FaHourglassStart
            <FaHourglass /> FaHourglass
            <FaHouseDamage /> FaHouseDamage
            <FaHouseUser /> FaHouseUser
            <FaHryvnia /> FaHryvnia
            <FaICursor /> FaICursor
            <FaIceCream /> FaIceCream
            <FaIcicles /> FaIcicles
            <FaIcons /> FaIcons
            <FaIdBadge /> FaIdBadge
            <FaIdCardAlt /> FaIdCardAlt
            <FaIdCard /> FaIdCard
            <FaIgloo /> FaIgloo
            <FaImage /> FaImage
            <FaImages /> FaImages
            <FaInbox /> FaInbox
            <FaIndent /> FaIndent
            <FaIndustry /> FaIndustry
            <FaInfinity /> FaInfinity
            <FaInfoCircle /> FaInfoCircle
            <FaInfo /> FaInfo
            <FaItalic /> FaItalic
            <FaJedi /> FaJedi
            <FaJoint /> FaJoint
            <FaJournalWhills /> FaJournalWhills
            <FaKaaba /> FaKaaba
            <FaKey /> FaKey
            <FaKeyboard /> FaKeyboard
            <FaKhanda /> FaKhanda
            <FaKissBeam /> FaKissBeam
            <FaKissWinkHeart /> FaKissWinkHeart
            <FaKiss /> FaKiss
            <FaKiwiBird /> FaKiwiBird
            <FaLandmark /> FaLandmark
            <FaLanguage /> FaLanguage
            <FaLaptopCode /> FaLaptopCode
            <FaLaptopHouse /> FaLaptopHouse
            <FaLaptopMedical /> FaLaptopMedical
            <FaLaptop /> FaLaptop
            <FaLaughBeam /> FaLaughBeam
            <FaLaughSquint /> FaLaughSquint
            <FaLaughWink /> FaLaughWink
            <FaLaugh /> FaLaugh
            <FaLayerGroup /> FaLayerGroup
            <FaLeaf /> FaLeaf
            <FaLemon /> FaLemon
            <FaLessThanEqual /> FaLessThanEqual
            <FaLessThan /> FaLessThan
            <FaLevelDownAlt /> FaLevelDownAlt
            <FaLevelUpAlt /> FaLevelUpAlt
            <FaLifeRing /> FaLifeRing
            <FaLightbulb /> FaLightbulb
            <FaLink /> FaLink
            <FaLiraSign /> FaLiraSign
            <FaListAlt /> FaListAlt
            <FaListOl /> FaListOl
            <FaListUl /> FaListUl
            <FaList /> FaList
            <FaLocationArrow /> FaLocationArrow
            <FaLockOpen /> FaLockOpen
            <FaLock /> FaLock
            <FaLongArrowAltDown /> FaLongArrowAltDown
            <FaLongArrowAltLeft /> FaLongArrowAltLeft
            <FaLongArrowAltRight /> FaLongArrowAltRight
            <FaLongArrowAltUp /> FaLongArrowAltUp
            <FaLowVision /> FaLowVision
            <FaLuggageCart /> FaLuggageCart
            <FaLungsVirus /> FaLungsVirus
            <FaLungs /> FaLungs
            <FaMagic /> FaMagic
            <FaMagnet /> FaMagnet
            <FaMailBulk /> FaMailBulk
            <FaMale /> FaMale
            <FaMapMarkedAlt /> FaMapMarkedAlt
            <FaMapMarked /> FaMapMarked
            <FaMapMarkerAlt /> FaMapMarkerAlt
            <FaMapMarker /> FaMapMarker
            <FaMapPin /> FaMapPin
            <FaMapSigns /> FaMapSigns
            <FaMap /> FaMap
            <FaMarker /> FaMarker
            <FaMarsDouble /> FaMarsDouble
            <FaMarsStrokeH /> FaMarsStrokeH
            <FaMarsStrokeV /> FaMarsStrokeV
            <FaMarsStroke /> FaMarsStroke
            <FaMars /> FaMars
            <FaMask /> FaMask
            <FaMedal /> FaMedal
            <FaMedkit /> FaMedkit
            <FaMehBlank /> FaMehBlank
            <FaMehRollingEyes /> FaMehRollingEyes
            <FaMeh /> FaMeh
            <FaMemory /> FaMemory
            <FaMenorah /> FaMenorah
            <FaMercury /> FaMercury
            <FaMeteor /> FaMeteor
            <FaMicrochip /> FaMicrochip
            <FaMicrophoneAltSlash /> FaMicrophoneAltSlash
            <FaMicrophoneAlt /> FaMicrophoneAlt
            <FaMicrophoneSlash /> FaMicrophoneSlash
            <FaMicrophone /> FaMicrophone
            <FaMicroscope /> FaMicroscope
            <FaMinusCircle /> FaMinusCircle
            <FaMinusSquare /> FaMinusSquare
            <FaMinus /> FaMinus
            <FaMitten /> FaMitten
            <FaMobileAlt /> FaMobileAlt
            <FaMobile /> FaMobile
            <FaMoneyBillAlt /> FaMoneyBillAlt
            <FaMoneyBillWaveAlt /> FaMoneyBillWaveAlt
            <FaMoneyBillWave /> FaMoneyBillWave
            <FaMoneyBill /> FaMoneyBill
            <FaMoneyCheckAlt /> FaMoneyCheckAlt
            <FaMoneyCheck /> FaMoneyCheck
            <FaMonument /> FaMonument
            <FaMoon /> FaMoon
            <FaMortarPestle /> FaMortarPestle
            <FaMosque /> FaMosque
            <FaMotorcycle /> FaMotorcycle
            <FaMountain /> FaMountain
            <FaMousePointer /> FaMousePointer
            <FaMouse /> FaMouse
            <FaMugHot /> FaMugHot
            <FaMusic /> FaMusic
            <FaNetworkWired /> FaNetworkWired
            <FaNeuter /> FaNeuter
            <FaNewspaper /> FaNewspaper
            <FaNotEqual /> FaNotEqual
            <FaNotesMedical /> FaNotesMedical
            <FaObjectGroup /> FaObjectGroup
            <FaObjectUngroup /> FaObjectUngroup
            <FaOilCan /> FaOilCan
            <FaOm /> FaOm
            <FaOtter /> FaOtter
            <FaOutdent /> FaOutdent
            <FaPager /> FaPager
            <FaPaintBrush /> FaPaintBrush
            <FaPaintRoller /> FaPaintRoller
            <FaPalette /> FaPalette
            <FaPallet /> FaPallet
            <FaPaperPlane /> FaPaperPlane
            <FaPaperclip /> FaPaperclip
            <FaParachuteBox /> FaParachuteBox
            <FaParagraph /> FaParagraph
            <FaParking /> FaParking
            <FaPassport /> FaPassport
            <FaPastafarianism /> FaPastafarianism
            <FaPaste /> FaPaste
            <FaPauseCircle /> FaPauseCircle
            <FaPause /> FaPause
            <FaPaw /> FaPaw
            <FaPeace /> FaPeace
            <FaPenAlt /> FaPenAlt
            <FaPenFancy /> FaPenFancy
            <FaPenNib /> FaPenNib
            <FaPenSquare /> FaPenSquare
            <FaPen /> FaPen
            <FaPencilAlt /> FaPencilAlt
            <FaPencilRuler /> FaPencilRuler
            <FaPeopleArrows /> FaPeopleArrows
            <FaPeopleCarry /> FaPeopleCarry
            <FaPepperHot /> FaPepperHot
            <FaPercent /> FaPercent
            <FaPercentage /> FaPercentage
            <FaPersonBooth /> FaPersonBooth
            <FaPhoneAlt /> FaPhoneAlt
            <FaPhoneSlash /> FaPhoneSlash
            <FaPhoneSquareAlt /> FaPhoneSquareAlt
            <FaPhoneSquare /> FaPhoneSquare
            <FaPhoneVolume /> FaPhoneVolume
            <FaPhone /> FaPhone
            <FaPhotoVideo /> FaPhotoVideo
            <FaPiggyBank /> FaPiggyBank
            <FaPills /> FaPills
            <FaPizzaSlice /> FaPizzaSlice
            <FaPlaceOfWorship /> FaPlaceOfWorship
            <FaPlaneArrival /> FaPlaneArrival
            <FaPlaneDeparture /> FaPlaneDeparture
            <FaPlaneSlash /> FaPlaneSlash
            <FaPlane /> FaPlane
            <FaPlayCircle /> FaPlayCircle
            <FaPlay /> FaPlay
            <FaPlug /> FaPlug
            <FaPlusCircle /> FaPlusCircle
            <FaPlusSquare /> FaPlusSquare
            <FaPlus /> FaPlus
            <FaPodcast /> FaPodcast
            <FaPollH /> FaPollH
            <FaPoll /> FaPoll
            <FaPooStorm /> FaPooStorm
            <FaPoo /> FaPoo
            <FaPoop /> FaPoop
            <FaPortrait /> FaPortrait
            <FaPoundSign /> FaPoundSign
            <FaPowerOff /> FaPowerOff
            <FaPray /> FaPray
            <FaPrayingHands /> FaPrayingHands
            <FaPrescriptionBottleAlt /> FaPrescriptionBottleAlt
            <FaPrescriptionBottle /> FaPrescriptionBottle
            <FaPrescription /> FaPrescription
            <FaPrint /> FaPrint
            <FaProcedures /> FaProcedures
            <FaProjectDiagram /> FaProjectDiagram
            <FaPumpMedical /> FaPumpMedical
            <FaPumpSoap /> FaPumpSoap
            <FaPuzzlePiece /> FaPuzzlePiece
            <FaQrcode /> FaQrcode
            <FaQuestionCircle /> FaQuestionCircle
            <FaQuestion /> FaQuestion
            <FaQuidditch /> FaQuidditch
            <FaQuoteLeft /> FaQuoteLeft
            <FaQuoteRight /> FaQuoteRight
            <FaQuran /> FaQuran
            <FaRadiationAlt /> FaRadiationAlt
            <FaRadiation /> FaRadiation
            <FaRainbow /> FaRainbow
            <FaRandom /> FaRandom
            <FaReceipt /> FaReceipt
            <FaRecordVinyl /> FaRecordVinyl
            <FaRecycle /> FaRecycle
            <FaRedoAlt /> FaRedoAlt
            <FaRedo /> FaRedo
            <FaRegistered /> FaRegistered
            <FaRemoveFormat /> FaRemoveFormat
            <FaReplyAll /> FaReplyAll
            <FaReply /> FaReply
            <FaRepublican /> FaRepublican
            <FaRestroom /> FaRestroom
            <FaRetweet /> FaRetweet
            <FaRibbon /> FaRibbon
            <FaRing /> FaRing
            <FaRoad /> FaRoad
            <FaRobot /> FaRobot
            <FaRocket /> FaRocket
            <FaRoute /> FaRoute
            <FaRssSquare /> FaRssSquare
            <FaRss /> FaRss
            <FaRubleSign /> FaRubleSign
            <FaRulerCombined /> FaRulerCombined
            <FaRulerHorizontal /> FaRulerHorizontal
            <FaRulerVertical /> FaRulerVertical
            <FaRuler /> FaRuler
            <FaRunning /> FaRunning
            <FaRupeeSign /> FaRupeeSign
            <FaSadCry /> FaSadCry
            <FaSadTear /> FaSadTear
            <FaSatelliteDish /> FaSatelliteDish
            <FaSatellite /> FaSatellite
            <FaSave /> FaSave
            <FaSchool /> FaSchool
            <FaScrewdriver /> FaScrewdriver
            <FaScroll /> FaScroll
            <FaSdCard /> FaSdCard
            <FaSearchDollar /> FaSearchDollar
            <FaSearchLocation /> FaSearchLocation
            <FaSearchMinus /> FaSearchMinus
            <FaSearchPlus /> FaSearchPlus
            <FaSearch /> FaSearch
            <FaSeedling /> FaSeedling
            <FaServer /> FaServer
            <FaShapes /> FaShapes
            <FaShareAltSquare /> FaShareAltSquare
            <FaShareAlt /> FaShareAlt
            <FaShareSquare /> FaShareSquare
            <FaShare /> FaShare
            <FaShekelSign /> FaShekelSign
            <FaShieldAlt /> FaShieldAlt
            <FaShieldVirus /> FaShieldVirus
            <FaShip /> FaShip
            <FaShippingFast /> FaShippingFast
            <FaShoePrints /> FaShoePrints
            <FaShoppingBag /> FaShoppingBag
            <FaShoppingBasket /> FaShoppingBasket
            <FaShoppingCart /> FaShoppingCart
            <FaShower /> FaShower
            <FaShuttleVan /> FaShuttleVan
            <FaSignInAlt /> FaSignInAlt
            <FaSignLanguage /> FaSignLanguage
            <FaSignOutAlt /> FaSignOutAlt
            <FaSign /> FaSign
            <FaSignal /> FaSignal
            <FaSignature /> FaSignature
            <FaSimCard /> FaSimCard
            <FaSink /> FaSink
            <FaSitemap /> FaSitemap
            <FaSkating /> FaSkating
            <FaSkiingNordic /> FaSkiingNordic
            <FaSkiing /> FaSkiing
            <FaSkullCrossbones /> FaSkullCrossbones
            <FaSkull /> FaSkull
            <FaSlash /> FaSlash
            <FaSleigh /> FaSleigh
            <FaSlidersH /> FaSlidersH
            <FaSmileBeam /> FaSmileBeam
            <FaSmileWink /> FaSmileWink
            <FaSmile /> FaSmile
            <FaSmog /> FaSmog
            <FaSmokingBan /> FaSmokingBan
            <FaSmoking /> FaSmoking
            <FaSms /> FaSms
            <FaSnowboarding /> FaSnowboarding
            <FaSnowflake /> FaSnowflake
            <FaSnowman /> FaSnowman
            <FaSnowplow /> FaSnowplow
            <FaSoap /> FaSoap
            <FaSocks /> FaSocks
            <FaSolarPanel /> FaSolarPanel
            <FaSortAlphaDownAlt /> FaSortAlphaDownAlt
            <FaSortAlphaDown /> FaSortAlphaDown
            <FaSortAlphaUpAlt /> FaSortAlphaUpAlt
            <FaSortAlphaUp /> FaSortAlphaUp
            <FaSortAmountDownAlt /> FaSortAmountDownAlt
            <FaSortAmountDown /> FaSortAmountDown
            <FaSortAmountUpAlt /> FaSortAmountUpAlt
            <FaSortAmountUp /> FaSortAmountUp
            <FaSortDown /> FaSortDown
            <FaSortNumericDownAlt /> FaSortNumericDownAlt
            <FaSortNumericDown /> FaSortNumericDown
            <FaSortNumericUpAlt /> FaSortNumericUpAlt
            <FaSortNumericUp /> FaSortNumericUp
            <FaSortUp /> FaSortUp
            <FaSort /> FaSort
            <FaSpa /> FaSpa
            <FaSpaceShuttle /> FaSpaceShuttle
            <FaSpellCheck /> FaSpellCheck
            <FaSpider /> FaSpider
            <FaSpinner /> FaSpinner
            <FaSplotch /> FaSplotch
            <FaSprayCan /> FaSprayCan
            <FaSquareFull /> FaSquareFull
            <FaSquareRootAlt /> FaSquareRootAlt
            <FaSquare /> FaSquare
            <FaStamp /> FaStamp
            <FaStarAndCrescent /> FaStarAndCrescent
            <FaStarHalfAlt /> FaStarHalfAlt
            <FaStarHalf /> FaStarHalf
            <FaStarOfDavid /> FaStarOfDavid
            <FaStarOfLife /> FaStarOfLife
            <FaStar /> FaStar
            <FaStepBackward /> FaStepBackward
            <FaStepForward /> FaStepForward
            <FaStethoscope /> FaStethoscope
            <FaStickyNote /> FaStickyNote
            <FaStopCircle /> FaStopCircle
            <FaStop /> FaStop
            <FaStopwatch20 /> FaStopwatch20
            <FaStopwatch /> FaStopwatch
            <FaStoreAltSlash /> FaStoreAltSlash
            <FaStoreAlt /> FaStoreAlt
            <FaStoreSlash /> FaStoreSlash
            <FaStore /> FaStore
            <FaStream /> FaStream
            <FaStreetView /> FaStreetView
            <FaStrikethrough /> FaStrikethrough
            <FaStroopwafel /> FaStroopwafel
            <FaSubscript /> FaSubscript
            <FaSubway /> FaSubway
            <FaSuitcaseRolling /> FaSuitcaseRolling
            <FaSuitcase /> FaSuitcase
            <FaSun /> FaSun
            <FaSuperscript /> FaSuperscript
            <FaSurprise /> FaSurprise
            <FaSwatchbook /> FaSwatchbook
            <FaSwimmer /> FaSwimmer
            <FaSwimmingPool /> FaSwimmingPool
            <FaSynagogue /> FaSynagogue
            <FaSyncAlt /> FaSyncAlt
            <FaSync /> FaSync
            <FaSyringe /> FaSyringe
            <FaTableTennis /> FaTableTennis
            <FaTable /> FaTable
            <FaTabletAlt /> FaTabletAlt
            <FaTablet /> FaTablet
            <FaTablets /> FaTablets
            <FaTachometerAlt /> FaTachometerAlt
            <FaTag /> FaTag
            <FaTags /> FaTags
            <FaTape /> FaTape
            <FaTasks /> FaTasks
            <FaTaxi /> FaTaxi
            <FaTeethOpen /> FaTeethOpen
            <FaTeeth /> FaTeeth
            <FaTemperatureHigh /> FaTemperatureHigh
            <FaTemperatureLow /> FaTemperatureLow
            <FaTenge /> FaTenge
            <FaTerminal /> FaTerminal
            <FaTextHeight /> FaTextHeight
            <FaTextWidth /> FaTextWidth
            <FaThLarge /> FaThLarge
            <FaThList /> FaThList
            <FaTh /> FaTh
            <FaTheaterMasks /> FaTheaterMasks
            <FaThermometerEmpty /> FaThermometerEmpty
            <FaThermometerFull /> FaThermometerFull
            <FaThermometerHalf /> FaThermometerHalf
            <FaThermometerQuarter /> FaThermometerQuarter
            <FaThermometerThreeQuarters /> FaThermometerThreeQuarters
            <FaThermometer /> FaThermometer
            <FaThumbsDown /> FaThumbsDown
            <FaThumbsUp /> FaThumbsUp
            <FaThumbtack /> FaThumbtack
            <FaTicketAlt /> FaTicketAlt
            <FaTimesCircle /> FaTimesCircle
            <FaTimes /> FaTimes
            <FaTintSlash /> FaTintSlash
            <FaTint /> FaTint
            <FaTired /> FaTired
            <FaToggleOff /> FaToggleOff
            <FaToggleOn /> FaToggleOn
            <FaToiletPaperSlash /> FaToiletPaperSlash
            <FaToiletPaper /> FaToiletPaper
            <FaToilet /> FaToilet
            <FaToolbox /> FaToolbox
            <FaTools /> FaTools
            <FaTooth /> FaTooth
            <FaTorah /> FaTorah
            <FaToriiGate /> FaToriiGate
            <FaTractor /> FaTractor
            <FaTrademark /> FaTrademark
            <FaTrafficLight /> FaTrafficLight
            <FaTrailer /> FaTrailer
            <FaTrain /> FaTrain
            <FaTram /> FaTram
            <FaTransgenderAlt /> FaTransgenderAlt
            <FaTransgender /> FaTransgender
            <FaTrashAlt /> FaTrashAlt
            <FaTrashRestoreAlt /> FaTrashRestoreAlt
            <FaTrashRestore /> FaTrashRestore
            <FaTrash /> FaTrash
            <FaTree /> FaTree
            <FaTrophy /> FaTrophy
            <FaTruckLoading /> FaTruckLoading
            <FaTruckMonster /> FaTruckMonster
            <FaTruckMoving /> FaTruckMoving
            <FaTruckPickup /> FaTruckPickup
            <FaTruck /> FaTruck
            <FaTshirt /> FaTshirt
            <FaTty /> FaTty
            <FaTv /> FaTv
            <FaUmbrellaBeach /> FaUmbrellaBeach
            <FaUmbrella /> FaUmbrella
            <FaUnderline /> FaUnderline
            <FaUndoAlt /> FaUndoAlt
            <FaUndo /> FaUndo
            <FaUniversalAccess /> FaUniversalAccess
            <FaUniversity /> FaUniversity
            <FaUnlink /> FaUnlink
            <FaUnlockAlt /> FaUnlockAlt
            <FaUnlock /> FaUnlock
            <FaUpload /> FaUpload
            <FaUserAltSlash /> FaUserAltSlash
            <FaUserAlt /> FaUserAlt
            <FaUserAstronaut /> FaUserAstronaut
            <FaUserCheck /> FaUserCheck
            <FaUserCircle /> FaUserCircle
            <FaUserClock /> FaUserClock
            <FaUserCog /> FaUserCog
            <FaUserEdit /> FaUserEdit
            <FaUserFriends /> FaUserFriends
            <FaUserGraduate /> FaUserGraduate
            <FaUserInjured /> FaUserInjured
            <FaUserLock /> FaUserLock
            <FaUserMd /> FaUserMd
            <FaUserMinus /> FaUserMinus
            <FaUserNinja /> FaUserNinja
            <FaUserNurse /> FaUserNurse
            <FaUserPlus /> FaUserPlus
            <FaUserSecret /> FaUserSecret
            <FaUserShield /> FaUserShield
            <FaUserSlash /> FaUserSlash
            <FaUserTag /> FaUserTag
            <FaUserTie /> FaUserTie
            <FaUserTimes /> FaUserTimes
            <FaUser /> FaUser
            <FaUsersCog /> FaUsersCog
            <FaUsersSlash /> FaUsersSlash
            <FaUsers /> FaUsers
            <FaUtensilSpoon /> FaUtensilSpoon
            <FaUtensils /> FaUtensils
            <FaVectorSquare /> FaVectorSquare
            <FaVenusDouble /> FaVenusDouble
            <FaVenusMars /> FaVenusMars
            <FaVenus /> FaVenus
            <FaVestPatches /> FaVestPatches
            <FaVest /> FaVest
            <FaVial /> FaVial
            <FaVials /> FaVials
            <FaVideoSlash /> FaVideoSlash
            <FaVideo /> FaVideo
            <FaVihara /> FaVihara
            <FaVirusSlash /> FaVirusSlash
            <FaVirus /> FaVirus
            <FaViruses /> FaViruses
            <FaVoicemail /> FaVoicemail
            <FaVolleyballBall /> FaVolleyballBall
            <FaVolumeDown /> FaVolumeDown
            <FaVolumeMute /> FaVolumeMute
            <FaVolumeOff /> FaVolumeOff
            <FaVolumeUp /> FaVolumeUp
            <FaVoteYea /> FaVoteYea
            <FaVrCardboard /> FaVrCardboard
            <FaWalking /> FaWalking
            <FaWallet /> FaWallet
            <FaWarehouse /> FaWarehouse
            <FaWater /> FaWater
            <FaWaveSquare /> FaWaveSquare
            <FaWeightHanging /> FaWeightHanging
            <FaWeight /> FaWeight
            <FaWheelchair /> FaWheelchair
            <FaWifi /> FaWifi
            <FaWind /> FaWind
            <FaWindowClose /> FaWindowClose
            <FaWindowMaximize /> FaWindowMaximize
            <FaWindowMinimize /> FaWindowMinimize
            <FaWindowRestore /> FaWindowRestore
            <FaWineBottle /> FaWineBottle
            <FaWineGlassAlt /> FaWineGlassAlt
            <FaWineGlass /> FaWineGlass
            <FaWonSign /> FaWonSign
            <FaWrench /> FaWrench
            <FaXRay /> FaXRay
            <FaYenSign /> FaYenSign
            <FaYinYang /> FaYinYang
            <FaRegAddressBook /> FaRegAddressBook
            <FaRegAddressCard /> FaRegAddressCard
            <FaRegAngry /> FaRegAngry
            <FaRegArrowAltCircleDown /> FaRegArrowAltCircleDown
            <FaRegArrowAltCircleLeft /> FaRegArrowAltCircleLeft
            <FaRegArrowAltCircleRight /> FaRegArrowAltCircleRight
            <FaRegArrowAltCircleUp /> FaRegArrowAltCircleUp
            <FaRegBellSlash /> FaRegBellSlash
            <FaRegBell /> FaRegBell
            <FaRegBookmark /> FaRegBookmark
            <FaRegBuilding /> FaRegBuilding
            <FaRegCalendarAlt /> FaRegCalendarAlt
            <FaRegCalendarCheck /> FaRegCalendarCheck
            <FaRegCalendarMinus /> FaRegCalendarMinus
            <FaRegCalendarPlus /> FaRegCalendarPlus
            <FaRegCalendarTimes /> FaRegCalendarTimes
            <FaRegCalendar /> FaRegCalendar
            <FaRegCaretSquareDown /> FaRegCaretSquareDown
            <FaRegCaretSquareLeft /> FaRegCaretSquareLeft
            <FaRegCaretSquareRight /> FaRegCaretSquareRight
            <FaRegCaretSquareUp /> FaRegCaretSquareUp
            <FaRegChartBar /> FaRegChartBar
            <FaRegCheckCircle /> FaRegCheckCircle
            <FaRegCheckSquare /> FaRegCheckSquare
            <FaRegCircle /> FaRegCircle
            <FaRegClipboard /> FaRegClipboard
            <FaRegClock /> FaRegClock
            <FaRegClone /> FaRegClone
            <FaRegClosedCaptioning /> FaRegClosedCaptioning
            <FaRegCommentAlt /> FaRegCommentAlt
            <FaRegCommentDots /> FaRegCommentDots
            <FaRegComment /> FaRegComment
            <FaRegComments /> FaRegComments
            <FaRegCompass /> FaRegCompass
            <FaRegCopy /> FaRegCopy
            <FaRegCopyright /> FaRegCopyright
            <FaRegCreditCard /> FaRegCreditCard
            <FaRegDizzy /> FaRegDizzy
            <FaRegDotCircle /> FaRegDotCircle
            <FaRegEdit /> FaRegEdit
            <FaRegEnvelopeOpen /> FaRegEnvelopeOpen
            <FaRegEnvelope /> FaRegEnvelope
            <FaRegEyeSlash /> FaRegEyeSlash
            <FaRegEye /> FaRegEye
            <FaRegFileAlt /> FaRegFileAlt
            <FaRegFileArchive /> FaRegFileArchive
            <FaRegFileAudio /> FaRegFileAudio
            <FaRegFileCode /> FaRegFileCode
            <FaRegFileExcel /> FaRegFileExcel
            <FaRegFileImage /> FaRegFileImage
            <FaRegFilePdf /> FaRegFilePdf
            <FaRegFilePowerpoint /> FaRegFilePowerpoint
            <FaRegFileVideo /> FaRegFileVideo
            <FaRegFileWord /> FaRegFileWord
            <FaRegFile /> FaRegFile
            <FaRegFlag /> FaRegFlag
            <FaRegFlushed /> FaRegFlushed
            <FaRegFolderOpen /> FaRegFolderOpen
            <FaRegFolder /> FaRegFolder
            <FaRegFontAwesomeLogoFull /> FaRegFontAwesomeLogoFull
            <FaRegFrownOpen /> FaRegFrownOpen
            <FaRegFrown /> FaRegFrown
            <FaRegFutbol /> FaRegFutbol
            <FaRegGem /> FaRegGem
            <FaRegGrimace /> FaRegGrimace
            <FaRegGrinAlt /> FaRegGrinAlt
            <FaRegGrinBeamSweat /> FaRegGrinBeamSweat
            <FaRegGrinBeam /> FaRegGrinBeam
            <FaRegGrinHearts /> FaRegGrinHearts
            <FaRegGrinSquintTears /> FaRegGrinSquintTears
            <FaRegGrinSquint /> FaRegGrinSquint
            <FaRegGrinStars /> FaRegGrinStars
            <FaRegGrinTears /> FaRegGrinTears
            <FaRegGrinTongueSquint /> FaRegGrinTongueSquint
            <FaRegGrinTongueWink /> FaRegGrinTongueWink
            <FaRegGrinTongue /> FaRegGrinTongue
            <FaRegGrinWink /> FaRegGrinWink
            <FaRegGrin /> FaRegGrin
            <FaRegHandLizard /> FaRegHandLizard
            <FaRegHandPaper /> FaRegHandPaper
            <FaRegHandPeace /> FaRegHandPeace
            <FaRegHandPointDown /> FaRegHandPointDown
            <FaRegHandPointLeft /> FaRegHandPointLeft
            <FaRegHandPointRight /> FaRegHandPointRight
            <FaRegHandPointUp /> FaRegHandPointUp
            <FaRegHandPointer /> FaRegHandPointer
            <FaRegHandRock /> FaRegHandRock
            <FaRegHandScissors /> FaRegHandScissors
            <FaRegHandSpock /> FaRegHandSpock
            <FaRegHandshake /> FaRegHandshake
            <FaRegHdd /> FaRegHdd
            <FaRegHeart /> FaRegHeart
            <FaRegHospital /> FaRegHospital
            <FaRegHourglass /> FaRegHourglass
            <FaRegIdBadge /> FaRegIdBadge
            <FaRegIdCard /> FaRegIdCard
            <FaRegImage /> FaRegImage
            <FaRegImages /> FaRegImages
            <FaRegKeyboard /> FaRegKeyboard
            <FaRegKissBeam /> FaRegKissBeam
            <FaRegKissWinkHeart /> FaRegKissWinkHeart
            <FaRegKiss /> FaRegKiss
            <FaRegLaughBeam /> FaRegLaughBeam
            <FaRegLaughSquint /> FaRegLaughSquint
            <FaRegLaughWink /> FaRegLaughWink
            <FaRegLaugh /> FaRegLaugh
            <FaRegLemon /> FaRegLemon
            <FaRegLifeRing /> FaRegLifeRing
            <FaRegLightbulb /> FaRegLightbulb
            <FaRegListAlt /> FaRegListAlt
            <FaRegMap /> FaRegMap
            <FaRegMehBlank /> FaRegMehBlank
            <FaRegMehRollingEyes /> FaRegMehRollingEyes
            <FaRegMeh /> FaRegMeh
            <FaRegMinusSquare /> FaRegMinusSquare
            <FaRegMoneyBillAlt /> FaRegMoneyBillAlt
            <FaRegMoon /> FaRegMoon
            <FaRegNewspaper /> FaRegNewspaper
            <FaRegObjectGroup /> FaRegObjectGroup
            <FaRegObjectUngroup /> FaRegObjectUngroup
            <FaRegPaperPlane /> FaRegPaperPlane
            <FaRegPauseCircle /> FaRegPauseCircle
            <FaRegPlayCircle /> FaRegPlayCircle
            <FaRegPlusSquare /> FaRegPlusSquare
            <FaRegQuestionCircle /> FaRegQuestionCircle
            <FaRegRegistered /> FaRegRegistered
            <FaRegSadCry /> FaRegSadCry
            <FaRegSadTear /> FaRegSadTear
            <FaRegSave /> FaRegSave
            <FaRegShareSquare /> FaRegShareSquare
            <FaRegSmileBeam /> FaRegSmileBeam
            <FaRegSmileWink /> FaRegSmileWink
            <FaRegSmile /> FaRegSmile
            <FaRegSnowflake /> FaRegSnowflake
            <FaRegSquare /> FaRegSquare
            <FaRegStarHalf /> FaRegStarHalf
            <FaRegStar /> FaRegStar
            <FaRegStickyNote /> FaRegStickyNote
            <FaRegStopCircle /> FaRegStopCircle
            <FaRegSun /> FaRegSun
            <FaRegSurprise /> FaRegSurprise
            <FaRegThumbsDown /> FaRegThumbsDown
            <FaRegThumbsUp /> FaRegThumbsUp
            <FaRegTimesCircle /> FaRegTimesCircle
            <FaRegTired /> FaRegTired
            <FaRegTrashAlt /> FaRegTrashAlt
            <FaRegUserCircle /> FaRegUserCircle
            <FaRegUser /> FaRegUser
            <FaRegWindowClose /> FaRegWindowClose
            <FaRegWindowMaximize /> FaRegWindowMaximize
            <FaRegWindowMinimize /> FaRegWindowMinimize
            <FaRegWindowRestore /> FaRegWindowRestore
        </Wrap>
    )
}

export default Icons;