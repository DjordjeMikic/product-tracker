import multer from 'multer';
import path from 'path';

import { uploadsDir } from '../constants';

const fileFilter = (req, file, cb) => {
  const extreg = /jpeg|png|jpg/;
  const fileType = extreg.test(file.mimetype);
  const extType = extreg.test(path.extname(file.originalname).toLowerCase());

  if (fileType && extType) {
    req.name = '';
    return cb(null, true);
  }

  return cb(null, false);
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadsDir),
  filename: (req, file, cb) => {
    req.name = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;

    return cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  },
});

export const upload = multer({
  storage,
  fileFilter,
});
