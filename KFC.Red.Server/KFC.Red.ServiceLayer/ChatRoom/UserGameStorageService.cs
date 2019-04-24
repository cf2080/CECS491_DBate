﻿using KFC.Red.DataAccessLayer.Data;
using KFC.Red.DataAccessLayer.Models;
using KFC.Red.ServiceLayer.ChatRoom.Interface;
using KFC.RED.DataAccessLayer.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KFC.Red.ServiceLayer.ChatRoom
{
    public class UserGameStorageService : IUserGameStorage
    {
        private UserGameStorageRepository _UGSRepo;

        public UserGameStorageService()
        {
            _UGSRepo = new UserGameStorageRepository();
        }

        public UserGameStorage CreateUGS(ApplicationDbContext _db, UserGameStorage userGameStorage)
        {
            if (_UGSRepo.ExistingUGS(_db, userGameStorage.Id))
            {
                throw new ArgumentException("A userGameStorage with that ID already exists");
            }
            return _UGSRepo.CreateNewUGS(_db, userGameStorage);
        }

        public UserGameStorage DeleteUGS(ApplicationDbContext _db, int id)
        {
            return _UGSRepo.DeleteUGS(_db, id);
        }

    }
}